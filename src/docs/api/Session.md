# Session

Interface for object that holds info about a session. Session objects are not
created by the theme's code, but rather by the [`LightDM.Greeter`](Greeter)
class.

## name <ReadOnly />

- Type: `string`

The name for the session.

## key <ReadOnly />

- Type: `string`

The key for the session.

## comment <ReadOnly />

- Type: `string`

The comment for the session.

## type <ReadOnly />

- Type: `string`

The session type (X11 or Wayland)
