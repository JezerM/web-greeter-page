# Window

The global window object.

## window.lightdm

- Type: [`Greeter`](Greeter)

Greeter Instance

## window.greeter_config

- Type: [`GreeterConfig`](GreeterConfig)

Greeter Config - Access values from the greeter's config file.

## window.theme_utils

- Type: [`ThemeUtils`](ThemeUtils)

Theme Utils - various utility methods for use in greeter themes.

## "GreeterReady"

Greeter Ready Event. Themes should not initialize until this event has fired.
Event accesible through `window._ready_event`

## "GreeterBroadcastEvent"

Greeter Broadcast Event. The event is fired when a broadcast message is sent
with [`greeter_comm.broadcast`](GreeterComm#greeter-comm-broadcast).

| Param  | Type                               | Description            |
| ------ | ---------------------------------- | ---------------------- |
| window | [`WindowMetadata`](WindowMetadata) | Source window metadata |
| data   | `unknown`                          | Custom data received   |
