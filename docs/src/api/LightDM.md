---
title: LightDM
---

# {{ $frontmatter.title }}
The greeter's Theme JavaScript API.
Accesible through `lightdm` global variable.


* [LightDM](LightDM.html) : <code>object</code>
    * [.Greeter](Greeter.html)
        * [lightdm.authentication_user](Greeter.html#lightdm-authentication-user) : <code>string</code> \| <code>null</code>
        * [lightdm.autologin_guest](Greeter.html#lightdm-autologin-guest) : <code>boolean</code>
        * [lightdm.autologin_timeout](Greeter.html#lightdm-autologin-timeout) : <code>number</code>
        * [lightdm.autologin_user](Greeter.html#lightdm-autologin-user) : <code>string</code>
        * ~~[lightdm.batteryData](Greeter.html#lightdm-batterydata) : [<code>Battery</code>](Battery.html)~~
        * [lightdm.battery_data](Greeter.html#lightdm-battery-data) : [<code>Battery</code>](Battery.html)
        * [lightdm.brightness](Greeter.html#lightdm-brightness) : <code>number</code>
        * [lightdm.can_access_battery](Greeter.html#lightdm-can-access-battery) : <code>boolean</code>
        * [lightdm.can_access_brightness](Greeter.html#lightdm-can-access-brightness) : <code>boolean</code>
        * [lightdm.can_hibernate](Greeter.html#lightdm-can-hibernate) : <code>boolean</code>
        * [lightdm.can_restart](Greeter.html#lightdm-can-restart) : <code>boolean</code>
        * [lightdm.can_shutdown](Greeter.html#lightdm-can-shutdown) : <code>boolean</code>
        * [lightdm.can_suspend](Greeter.html#lightdm-can-suspend) : <code>boolean</code>
        * [lightdm.default_session](Greeter.html#lightdm-default-session) : <code>string</code>
        * [lightdm.has_guest_account](Greeter.html#lightdm-has-guest-account) : <code>boolean</code>
        * [lightdm.hide_users_hint](Greeter.html#lightdm-hide-users-hint) : <code>boolean</code>
        * [lightdm.hostname](Greeter.html#lightdm-hostname) : <code>string</code>
        * [lightdm.in_authentication](Greeter.html#lightdm-in-authentication) : <code>boolean</code>
        * [lightdm.is_authenticated](Greeter.html#lightdm-is-authenticated) : <code>boolean</code>
        * [lightdm.language](Greeter.html#lightdm-language) : [<code>Language</code>](Language.html) \| <code>null</code>
        * [lightdm.languages](Greeter.html#lightdm-languages) : [<code>Array.&lt;Language&gt;</code>](Language.html)
        * [lightdm.layout](Greeter.html#lightdm-layout) : [<code>Layout</code>](Layout.html)
        * [lightdm.layouts](Greeter.html#lightdm-layouts) : [<code>Array.&lt;Layout&gt;</code>](Layout.html)
        * [lightdm.lock_hint](Greeter.html#lightdm-lock-hint) : <code>boolean</code>
        * [lightdm.remote_sessions](Greeter.html#lightdm-remote-sessions) : [<code>Array.&lt;Session&gt;</code>](Session.html)
        * [lightdm.select_guest_hint](Greeter.html#lightdm-select-guest-hint) : <code>boolean</code>
        * [lightdm.select_user_hint](Greeter.html#lightdm-select-user-hint) : <code>string</code> \| <code>undefined</code>
        * [lightdm.sessions](Greeter.html#lightdm-sessions) : [<code>Array.&lt;Session&gt;</code>](Session.html)
        * [lightdm.show_manual_login_hint](Greeter.html#lightdm-show-manual-login-hint) : <code>boolean</code>
        * [lightdm.show_remote_login_hint](Greeter.html#lightdm-show-remote-login-hint) : <code>boolean</code>
        * [lightdm.users](Greeter.html#lightdm-users) : [<code>Array.&lt;User&gt;</code>](User.html)
        * [lightdm.authentication_complete](Greeter.html#lightdm-authentication-complete) : [<code>Signal</code>](Signal.html)
        * [lightdm.autologin_timer_expired](Greeter.html#lightdm-autologin-timer-expired) : [<code>Signal</code>](Signal.html)
        * [lightdm.brightness_update](Greeter.html#lightdm-brightness-update) : [<code>Signal</code>](Signal.html)
        * [lightdm.battery_update](Greeter.html#lightdm-battery-update) : [<code>Signal</code>](Signal.html)
        * [lightdm.idle](Greeter.html#lightdm-idle) : [<code>Signal</code>](Signal.html)
        * [lightdm.reset](Greeter.html#lightdm-reset) : [<code>Signal</code>](Signal.html)
        * [lightdm.show_message](Greeter.html#lightdm-show-message) : [<code>Signal</code>](Signal.html)
        * [lightdm.show_prompt](Greeter.html#lightdm-show-prompt) : [<code>Signal</code>](Signal.html)
        * [lightdm.authenticate(username)](Greeter.html#lightdm-authenticate) ⇒ <code>boolean</code>
        * [lightdm.authenticate_as_guest()](Greeter.html#lightdm-authenticate-as-guest) ⇒ <code>boolean</code>
        * ~~[lightdm.brightnessSet(quantity)](Greeter.html#lightdm-brightnessset)~~
        * [lightdm.brightness_set(quantity)](Greeter.html#lightdm-brightness-set)
        * ~~[lightdm.brightnessIncrease(quantity)](Greeter.html#lightdm-brightnessincrease)~~
        * [lightdm.brightness_increase(quantity)](Greeter.html#lightdm-brightness-increase)
        * ~~[lightdm.brightnessDecrease(quantity)](Greeter.html#lightdm-brightnessdecrease)~~
        * [lightdm.brightness_decrease(quantity)](Greeter.html#lightdm-brightness-decrease)
        * [lightdm.cancel_authentication()](Greeter.html#lightdm-cancel-authentication) ⇒ <code>boolean</code>
        * [lightdm.cancel_autologin()](Greeter.html#lightdm-cancel-autologin) ⇒ <code>boolean</code>
        * [lightdm.hibernate()](Greeter.html#lightdm-hibernate) ⇒ <code>boolean</code>
        * [lightdm.respond(response)](Greeter.html#lightdm-respond) ⇒ <code>boolean</code>
        * [lightdm.restart()](Greeter.html#lightdm-restart) ⇒ <code>boolean</code>
        * [lightdm.set_language(language)](Greeter.html#lightdm-set-language) ⇒ <code>boolean</code>
        * [lightdm.shutdown()](Greeter.html#lightdm-shutdown) ⇒ <code>boolean</code>
        * [lightdm.start_session(session)](Greeter.html#lightdm-start-session) ⇒ <code>boolean</code>
        * [lightdm.suspend()](Greeter.html#lightdm-suspend) ⇒ <code>boolean</code>
    * [.GreeterConfig](GreeterConfig.html)
        * [greeter_config.branding](GreeterConfig.html#greeter-config-branding) : <code>object</code>
        * [greeter_config.greeter](GreeterConfig.html#greeter-config-greeter) : <code>object</code>
        * [greeter_config.features](GreeterConfig.html#greeter-config-features) : <code>Object</code>
        * [greeter_config.layouts](GreeterConfig.html#greeter-config-layouts) : [<code>Array.&lt;Layout&gt;</code>](Layout.html)
    * [.Session](Session.html)
        * [session.name](Session.html#name) : <code>string</code>
        * [session.key](Session.html#key) : <code>string</code>
        * [session.comment](Session.html#comment) : <code>string</code>
        * [session.type](Session.html#type) : <code>string</code>
    * [.Language](Language.html)
        * [language.code](Language.html#code) : <code>string</code>
        * [language.name](Language.html#name) : <code>string</code>
        * [language.territory](Language.html#territory) : <code>string</code>
    * [.Layout](Layout.html)
        * [layout.description](Layout.html#description) : <code>string</code>
        * [layout.name](Layout.html#name) : <code>string</code>
        * [layout.short_description](Layout.html#short-description) : <code>string</code>
    * [.User](User.html)
        * [user.background](User.html#background) : <code>string</code>
        * [user.display_name](User.html#display-name) : <code>string</code>
        * [user.language](User.html#language) : <code>string</code>
        * [user.layout](User.html#layout) : <code>string</code>
        * [user.layouts](User.html#layouts) : <code>Array.&lt;string&gt;</code>
        * [user.image](User.html#image) : <code>string</code>
        * [user.home_directory](User.html#home-directory) : <code>string</code>
        * [user.username](User.html#username) : <code>string</code>
        * [user.logged_in](User.html#logged-in) : <code>Boolean</code>
        * [user.session](User.html#session) : <code>string</code>
    * [.Battery](Battery.html)
        * [battery.name](Battery#name) : <code>string</code>
        * [battery.level](Battery.html#level) : <code>string</code>
        * [battery.status](Battery.html#status) : <code>string</code>
        * [battery.ac_status](Battery.html#ac-status) : <code>boolean</code>
        * [battery.capacity](Battery.html#capacity) : <code>number</code>
        * [battery.time](Battery.html#time) : <code>string</code>
        * [battery.watt](Battery.html#watt) : <code>boolean</code>
    * [.Signal](Signal.html)
        * [signal.connect(callback)](Signal.html#connect)
        * [signal.disconnect(callback)](Signal.html#disconnect)
    * [.ThemeUtils](ThemeUtils.html)
        * ~~[theme_utils.bind_this(context)](ThemeUtils.html#theme-utils-bind-this) ⇒ <code>object</code>~~
        * [theme_utils.dirlist(path, only_images, callback)](ThemeUtils.html#theme-utils-dirlist)
        * [theme_utils.get_current_localized_date()](ThemeUtils.html#theme-utils-get-current-localized-date) ⇒ <code>string</code>
        * [theme_utils.get_current_localized_time()](ThemeUtils.html#theme-utils-get-current-localized-time) ⇒ <code>string</code>

