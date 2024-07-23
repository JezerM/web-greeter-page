# Greeter

Base class for the greeter's Theme JavaScript API. Greeter themes will interact
directly with an object derived from this class to facilitate the user log-in
process. The greeter will automatically create an instance when it starts. The
instance can be accessed using the global variable: `lightdm`.

## lightdm.authentication_user <ReadOnly />

- Type: `string` | `null`

The username of the user being authenticated or "null" if no authentication is
in progress

## lightdm.autologin_guest <ReadOnly />

- Type: `boolean`

Whether or not the guest account should be automatically logged into when the
timer expires.

## lightdm.autologin_timeout <ReadOnly />

- Type: `number`

The number of seconds to wait before automatically logging in.

## lightdm.autologin_user <ReadOnly />

- Type: `string`

The username with which to automattically log in when the timer expires.

## lightdm.batteryData <ReadOnly /> <Deprecated />

- Type: [`Battery`](Battery)
- Deprecated: Use [`battery_data`](Greeter#lightdm-battery-data)

Gets the battery data.

## lightdm.battery_data <ReadOnly />

- Type: [`Battery`](Battery)

Gets the battery data.

## lightdm.brightness <Writable />

- Type: `number`

The current brightness.

## lightdm.can_access_battery <ReadOnly />

- Type: `boolean`

Whether or not the greeter can access to battery data.

## lightdm.can_access_brightness <ReadOnly />

- Type: `boolean`

Whether or not the greeter can control display brightness.

## lightdm.can_hibernate <ReadOnly />

- Type: `boolean`

Whether or not the greeter can make the system hibernate.

## lightdm.can_restart <ReadOnly />

- Type: `boolean`

Whether or not the greeter can make the system restart.

## lightdm.can_shutdown <ReadOnly />

- Type: `boolean`

Whether or not the greeter can make the system shutdown.

## lightdm.can_suspend <ReadOnly />

- Type: `boolean`

Whether or not the greeter can make the system suspend/sleep.

## lightdm.default_session <ReadOnly />

- Type: `string`

The name of the default session.

## lightdm.has_guest_account <ReadOnly />

- Type: `boolean`

Whether or not guest sessions are supported.

## lightdm.hide_users_hint <ReadOnly />

- Type: `boolean`

Whether or not user accounts should be hidden.

## lightdm.hostname <ReadOnly />

- Type: `string`

The system's hostname.

## lightdm.in_authentication <ReadOnly />

- Type: `boolean`

Whether or not the greeter is in the process of authenticating.

## lightdm.is_authenticated <ReadOnly />

- Type: `boolean`

Whether or not the greeter has successfully authenticated.

## lightdm.language <ReadOnly />

- Type: [`Language`](Language) \| `null`

The current language or "null" if no language.

## lightdm.languages <ReadOnly />

- Type: [`Array.<Language>`](Language)

A list of languages to present to the user.

## lightdm.layout <Writable />

- Type: [`Layout`](Layout)

The currently active layout for the selected user.

## lightdm.layouts <ReadOnly />

- Type: [`Array.<Layout>`](Layout)

A list of keyboard layouts to present to the user.

## lightdm.lock_hint <ReadOnly />

- Type: `boolean`

Whether or not the greeter was started as a lock screen.

## lightdm.remote_sessions <ReadOnly />

- Type: [`Array.<Session>`](Session)

A list of remote sessions.

## lightdm.select_guest_hint <ReadOnly />

- Type: `boolean`

Whether or not the guest account should be selected by default.

## lightdm.select_user_hint <ReadOnly />

- Type: `string` | `undefined`

The username to select by default.

## lightdm.sessions <ReadOnly />

- Type: [`Array.<Session>`](Session)

List of available sessions.

## lightdm.show_manual_login_hint <ReadOnly />

- Type: `boolean`

Check if a manual login option should be shown. If "true", the theme should
provide a way for a username to be entered manually. Otherwise, themes that show
a user list may limit logins to only those users.

## lightdm.show_remote_login_hint <ReadOnly />

- Type: `boolean`

Check if a remote login option should be shown. If "true", the theme should
provide a way for a user to log into a remote desktop server.

## lightdm.users <ReadOnly />

- Type: [`Array.<User>`](User)

List of available users.

## lightdm.authentication_complete

- Type: [`Signal`](Signal)

Gets emitted when the greeter has completed authentication.

## lightdm.autologin_timer_expired

- Type: [`Signal`](Signal)

Gets emitted when the automatic login timer has expired.

## lightdm.brightness_update

- Type: [`Signal`](Signal)

Gets emitted when brightness is updated

## lightdm.battery_update

- Type: [`Signal`](Signal)

Gets emitted when battery is updated

## lightdm.idle

- Type: [`Signal`](Signal)

Gets emitted when the user has logged in and the greeter is no longer needed.

## lightdm.reset

- Type: [`Signal`](Signal)

Gets emitted when the user is returning to a greeter that was previously marked
idle.

## lightdm.show_message

- Type: [`Signal`](Signal)

Gets emitted when the greeter should show a message to the user.

## lightdm.show_prompt

- Type: [`Signal`](Signal)

Gets emitted when the greeter should show a prompt to the user.

## lightdm.authenticate(username)

Starts the authentication procedure for a user.

- Returns: `boolean` - Whether it is successful or not

|  Param   |        Type        | Description                                    |
| :------: | :----------------: | :--------------------------------------------- |
| username | `string` \| `null` | A username or `null` to prompt for a username. |

## lightdm.authenticate_as_guest()

Starts the authentication procedure for the guest user.

- Returns: `boolean` - Whether it is successful or not

## lightdm.brightnessSet(quantity) <Deprecated />

- Deprecated: Use [`brightness_set`](Greeter#lightdm-brightness-set)

Set the brightness to quantity

|  Param   |   Type   | Description         |
| :------: | :------: | :------------------ |
| quantity | `number` | The quantity to set |

## lightdm.brightness_set(quantity)

Set the brightness to quantity

|  Param   |   Type   | Description         |
| :------: | :------: | :------------------ |
| quantity | `number` | The quantity to set |

## lightdm.brightnessIncrease(quantity) <Deprecated />

- Deprecated: Use [`brightness_increase`](Greeter#lightdm-brightness-increase)

Increase the brightness by quantity

|  Param   |   Type   | Description              |
| :------: | :------: | :----------------------- |
| quantity | `number` | The quantity to increase |

## lightdm.brightness_increase(quantity)

Increase the brightness by quantity

|  Param   |   Type   | Description              |
| :------: | :------: | :----------------------- |
| quantity | `number` | The quantity to increase |

## lightdm.brightnessDecrease(quantity) <Deprecated />

- Deprecated: Use [`brightness_decrease`](Greeter#lightdm-brightness-decrease)

Decrease the brightness by quantity

|  Param   |   Type   | Description              |
| :------: | :------: | :----------------------- |
| quantity | `number` | The quantity to decrease |

## lightdm.brightness_decrease(quantity)

Decrease the brightness by quantity

|  Param   |   Type   | Description              |
| :------: | :------: | :----------------------- |
| quantity | `number` | The quantity to decrease |

## lightdm.cancel_authentication()

Cancel user authentication that is currently in progress.

- Returns: `boolean` - Whether it is successful or not

## lightdm.cancel_autologin()

Cancel the automatic login.

- Returns: `boolean` - Whether it is successful or not

## lightdm.hibernate()

Triggers the system to hibernate.

- Returns: `boolean` - `true` if hibernation initiated, otherwise `false`

## lightdm.respond(response)

Provide a response to a prompt.

- Returns: `boolean` - Whether it is successful or not

|  Param   |   Type   |
| :------: | :------: |
| response | `string` |

## lightdm.restart()

Triggers the system to restart.

- Returns: `boolean` - `true` if restart initiated, otherwise `false`

## lightdm.set_language(language)

Set the language for the currently authenticated user.

- Returns: `boolean` - Whether it is successful or not

|  Param   |   Type   | Description                                                             |
| :------: | :------: | :---------------------------------------------------------------------- |
| language | `string` | The language in the form of a locale specification (e.g. `de_DE.UTF-8`) |

## lightdm.shutdown()

Triggers the system to shutdown.

- Returns: `boolean` - `true` if shutdown initiated, otherwise `false`

## lightdm.start_session(session)

Start a session for the authenticated user.

- Returns: `boolean` - Whether it is successful or not

|  Param  |        Type        | Description                                          |
| :-----: | :----------------: | :--------------------------------------------------- |
| session | `string` \| `null` | The session to log into or `null` to use the default |

## lightdm.suspend()

Triggers the system to suspend/sleep.

- Returns: `boolean` - `true` if suspend/sleep initiated, otherwise `false`
