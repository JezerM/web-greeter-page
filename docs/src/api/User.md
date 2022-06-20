# User
Interface for object that holds info about a user account on the system. User
objects are not created by the theme's code, but rather by the [`LightDM.Greeter`](Greeter.html) class.

## background : <code>string</code>
The user background if any

**Read only**: true

## display\_name : <code>string</code>
The display name for the user.

**Read only**: true

## language : <code>string</code>
The language for the user.

**Read only**: true

## layout : <code>string</code>
The keyboard layout for the user.

**Read only**: true

## layouts : <code>Array.&lt;string&gt;</code>
The keyboard layouts the user have. You should not depend on this property, use [`greeter_config.layouts`](GreeterConfig.html#greeter-config-layouts) instead.

**Read only**: true

## image : <code>string</code>
The image for the user.

**Read only**: true

## home\_directory : <code>string</code>
The home_directory for the user.

**Read only**: true

## username : <code>string</code>
The username for the user.

**Read only**: true

## logged\_in : <code>Boolean</code>
Whether or not the user is currently logged in.

**Read only**: true

## session : <code>string</code>
The last session that the user logged into.

**Read only**: true
