---
title: Window
---

# {{ $frontmatter.title }}
The global window object.

## window.lightdm : [<code>Greeter</code>](Greeter.html)
Greeter Instance

## window.greeter\_config : [<code>GreeterConfig</code>](GreeterConfig.html)
Greeter Config - Access values from the greeter's config file.

## window.theme\_utils : [<code>ThemeUtils</code>](ThemeUtils.html)
Theme Utils - various utility methods for use in greeter themes.

## "GreeterReady"
Greeter Ready Event. Themes should not initialize until this event has fired.
Event accesible through `window._ready_event`
