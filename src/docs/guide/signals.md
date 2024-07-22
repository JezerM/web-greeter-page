# Signals

Signals were introduced in `web-greeter 3.0.0`, although they were a thing in LightDM. These signals allow a communication between LightDM and the theme itself, which aditionally allows to create more complex and well defined themes.

[[toc]]

## How these work

LightDM provides some signals by default which can be attached to other functions. How the greeter attaches the theme callbacks to these signals through `signal.connect` may defer depending on whether you use web-greeter, nody-greeter or sea-greeter; this won't be discussed here. Anyway, the behavior should be the same.

You attach a Javascript function to a signal with `signal.connect`, so when LightDM or web-greeter fires the signal all the attached functions will be executed. To disattach a function, call `signal.disconnect` and the function won't be executed when the signal fires.

### Internal behavior

Web Greeter, unlike nody-greeter, behaves asynchronously all the time between a theme-greeter communication due to the Qt5 behavior. This means that when a function is called on the Theme side, the Greeter will execute the appropiate function when it prefers to, so any return value of all functions documented here are just invalid in web-greeter.

Also, internally, web-greeter updates all the properties at once when a signal is fired with a little delay, so this is a big reason of why you can't do a `lightdm.respond` after a `lightdm.authenticate`; the `lightdm.in_authentication` hasn't been updated to true when you do a `lightdm.respond`, so it will fail. Another reason, which also affects nody-greeter and sea-greeter, is that your system should execute `lightdm.authenticate` and update the neeed data to do `lightdm.respond` almost instantly, sometimes it does, sometimes it doesn't, so it's always better to do a **wait** or use **show_prompt** signal.

## authentication_complete

This signal gets emitted when the greeter has completed authentication. So, when the user is authenticated, this signall will be emitted and run all its callbacks.

```javascript
lightdm.authentication_complete.connect(() => {
  console.log("User authenticated!");
});
```

## autologin_timer_expired

This signal gets emitted when the automatic login timer has expired.

> TODO

## idle

## reset

## show_message

## show_prompt
