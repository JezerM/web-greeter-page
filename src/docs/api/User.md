# User

Interface for object that holds info about a user account on the system. User
objects are not created by the theme's code, but rather by the
[`LightDM.Greeter`](Greeter) class.

## background <ReadOnly />

- Type: `string`

The user background if any.

## display_name <ReadOnly />

- Type: `string`

The display name for the user.

## language <ReadOnly />

- Type: `string`

The language for the user.

## layout <ReadOnly />

- Type: `string`

The keyboard layout for the user.

## layouts <ReadOnly />

- Type: `Array.<string>`

The keyboard layouts the user have. You should not depend on this property, use
[`greeter_config.layouts`](GreeterConfig#greeter-config-layouts) instead.

## image <ReadOnly />

- Type: `string`

The image for the user.

## home_directory <ReadOnly />

- Type: `string`

The home_directory for the user.

## username <ReadOnly />

- Type: `string`

The username for the user.

## logged_in <ReadOnly />

- Type: `boolean`

Whether or not the user is currently logged in.

## session <ReadOnly />

- Type: `string`

The last session that the user logged into.
