# How to Authenticate

Previous examples are too much simple, and not so useful. They are insecure, as
the greeter inmediately logs in (unless you want it that way~). You probably
want to select users and enter your password. This can be easily done with a
simple form.

## Manual login

With manual login, the user needs to enter both the username and the password.

### HTML

```html
<form action="POST" id="login">
  <input
    type="text"
    name="user"
    autocomplete="off"
    placeholder="Enter your username"
  />
  <input
    type="password"
    name="password"
    autocomplete="off"
    placeholder="Enter your password"
  />
  <button id="submit-button" type="submit">Submit</button>
</form>
```

Here, we create a `form` with any action (it does not matter) and two inputs,
one for the user and another one for the password, and a submit button.

### JavaScript

```javascript
const form = document.querySelector("form#login");

function getArrayForm(inputs) {
  if (!inputs) return {};
  var data = {};
  inputs.forEach((x) => {
    data[x.name] = x.value;
  });
  return data;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  var inputs = form.querySelectorAll("input");
  var data = getArrayForm(inputs);
  if (Object.keys(data).length === 0) return;

  lightdm.cancel_authentication();
  lightdm.authenticate(data.user);
  await wait(100);
  lightdm.respond(data.password);
  lightdm.start_session("ubuntu");
});
```

Add an event listener on "submit" event, which gets the form inputs and
transform them to a simple `{name: value}` object. And so, lightdm authenticates
with the username in `data.user` (the user input) and responds with the password
in `data.password` (the password input). Then, starts the Ubuntu session.

If we want to approach this way, it is needed to add a delay of 100ms or more to
avoid problems, because LightDM has a little delay when the user authentication
starts and when LightDM prompts for a response. Doing a `lightdm.respond`
inmediately after `lightdm.authenticate` provokes a failed authentication.

## Select user

The greeter provides a way to get a list of available users with the member
[`lightdm.users`](/docs/api/Greeter#lightdm-users), which returns an array of
[Users](/docs/api/User).

Creating a user selection is a bit more complex, requiring to create a button
for every user that starts the authentication for the selected user.

```javascript
let users = lightdm.users;

function updateUser(user) {
  // Update visual things

  lightdm.cancel_authentication();
  lightdm.authenticate(user.username);
}

for (let i = 0; i < users.length; i++) {
  var button = document.createElement("button");
  button.innerHTML = users[i].display_name;
  button.addEventListener("click", () => {
    updateUser(users[i]);
  });

  whateverElement.appendChild(button);
}
```

For every user, creates a button with the `display_name` as text. Then, adds an
event listener on "click" event, which updates the user. Inside `updateUser`,
theme could update visual things, such as a label containing the actual user,
the image, or things like that; then, cancels the current authentication
procedure (if any) and starts a new authentication with the selected user.

You could add these buttons wherever you want. Or, in another way, you could
create whatever element you want as long as every element starts a new
authentication procedure.

> [!NOTE]
>
> As the user is selected manually and there could be a big gap between
> `lightdm.authenticate` and `lightdm.respond`, there is no need to add a delay
> before doing a response.

## Both

The greeter offers a way to know if user wanted to show a manual login with
[`lightdm.show_manual_login_hint`](/docs/api/Greeter#lightdm-show-manual-login-hint),
an option inside the lightdm config (`/etc/lightdm/lightdm.conf`).

Anyway, you could implement this option no matter if user decided to
`show_manual_login`. But, it's always a good choice to implement every case.
