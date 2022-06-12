# Introduction

> Note: Everything applied to web-greeter can be applied to nody-greeter and sea-greeter.
> We will only use "web-greeter" for simplification purposes, except where otherwise noted.

Web Greeter provides a simple and well documented API, which allows themes to communicate with Web Greeter and the LightDM API.

To create a theme, you will need these essential functions:

```javascript
lightdm.authenticate(username)

lightdm.respond(response)

lightdm.start_session(session)
```

### [lightdm.authenticate(username)](/api/Greeter.html#lightdm-authenticate)
This method starts the authentication procedure for a user, allowing to start the user session.

If `username` is not provided, LightDM will prompt for it.

### [lightdm.respond(response)](/api/Greeter.html#lightdm-respond)
Provide a response to a prompt. Basically, this behaves like a password provider. After the authentication is initiated, you need to provide the user password with this method. It could be "12345", "password", "strongpassword", y'know, a password.

However, `lightdm.respond` can provide an user as well if `lightdm.authenticate` didn't receive an user.

> NOTE: If authentication is not initiated, this will cause an error.

### [lightdm.start_session(session)](/api/Greeter.html#lightdm-start-session)
Starts a session for the authenticated user. After the user is authenticated, you will need to start the session with this method.

> NOTE: If user is not authenticated, this won't work.

And that's it. You can create a simple javascript file with this:
```javascript
lightdm.authenticate("superuser")
lightdm.respond("superpassword")
lightdm.start_session("ubuntu")
```

Although, even if this may seem to work, it really won't. The `lightdm` object is not available when the greeter is initiated, or at least it's not recommended to use it when the themes has been alive for 0ms, so we need to listen to an event that can let us know when the LightDM API is available. Add an event listener to the `GreeterReady` event.

```javascript
window.addEventListener("GreeterReady", initGreeter)
```

And so, it will look like this:

```javascript
function initGreeter() {
  lightdm.authenticate("superuser")
  lightdm.respond("superpassword")
  lightdm.start_session("ubuntu")
}

window.addEventListener("GreeterReady", initGreeter)
```

Yet, it won't work~ This will provoke a failed authentication.

We need to do some adjustments:


```javascript
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

async function initGreeter() {
  lightdm.authenticate("superuser")
  await wait(100);
  lightdm.respond("superpassword")
  lightdm.start_session("ubuntu")
}

window.addEventListener("GreeterReady", initGreeter)
```

See the next guide for more information, also see the [Signals](/guide/signals.html#signals) guide for a complete explanation of this.
