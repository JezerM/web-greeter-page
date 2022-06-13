(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{197:function(t,e,a){"use strict";a.r(e);var s=a(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),a("p",[t._v("Base class for the greeter's Theme JavaScript API. Greeter themes will interact\ndirectly with an object derived from this class to facilitate the user log-in process.\nThe greeter will automatically create an instance when it starts.\nThe instance can be accessed using the global variable: "),a("code",[t._v("lightdm")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"lightdm-authentication-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-authentication-user"}},[t._v("#")]),t._v(" lightdm.authentication_user : "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v('The username of the user being authenticated or "null"\nif no authentication is in progress')]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-autologin-guest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-autologin-guest"}},[t._v("#")]),t._v(" lightdm.autologin_guest : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the guest account should be automatically logged\ninto when the timer expires.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-autologin-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-autologin-timeout"}},[t._v("#")]),t._v(" lightdm.autologin_timeout : "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The number of seconds to wait before automatically logging in.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-autologin-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-autologin-user"}},[t._v("#")]),t._v(" lightdm.autologin_user : "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The username with which to automattically log in when the timer expires.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-batterydata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-batterydata"}},[t._v("#")]),t._v(" "),a("s",[t._v("lightdm.batteryData : "),a("a",{attrs:{href:"Battery"}},[a("code",[t._v("Battery")])])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Deprecated")])]),t._v(": Use "),a("a",{attrs:{href:"Greeter#LightDM_Greeter-battery_data"}},[a("code",[t._v("battery_data")])])]),t._v(" "),a("p",[t._v("Gets the battery data.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-battery-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-battery-data"}},[t._v("#")]),t._v(" lightdm.battery_data : "),a("a",{attrs:{href:"Battery"}},[a("code",[t._v("Battery")])])]),t._v(" "),a("p",[t._v("Gets the battery data.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightness"}},[t._v("#")]),t._v(" lightdm.brightness : "),a("code",[t._v("number")])]),t._v(" "),a("p",[t._v("The current brightness")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-access-battery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-access-battery"}},[t._v("#")]),t._v(" lightdm.can_access_battery : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can access to battery data.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-access-brightness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-access-brightness"}},[t._v("#")]),t._v(" lightdm.can_access_brightness : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can control display brightness.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-hibernate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-hibernate"}},[t._v("#")]),t._v(" lightdm.can_hibernate : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can make the system hibernate.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-restart"}},[t._v("#")]),t._v(" lightdm.can_restart : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can make the system restart.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-shutdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-shutdown"}},[t._v("#")]),t._v(" lightdm.can_shutdown : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can make the system shutdown.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-can-suspend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-can-suspend"}},[t._v("#")]),t._v(" lightdm.can_suspend : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter can make the system suspend/sleep.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-default-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-default-session"}},[t._v("#")]),t._v(" lightdm.default_session : "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The name of the default session.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-has-guest-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-has-guest-account"}},[t._v("#")]),t._v(" lightdm.has_guest_account : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not guest sessions are supported.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-hide-users-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-hide-users-hint"}},[t._v("#")]),t._v(" lightdm.hide_users_hint : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not user accounts should be hidden.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-hostname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-hostname"}},[t._v("#")]),t._v(" lightdm.hostname : "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The system's hostname.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-in-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-in-authentication"}},[t._v("#")]),t._v(" lightdm.in_authentication : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter is in the process of authenticating.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-is-authenticated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-is-authenticated"}},[t._v("#")]),t._v(" lightdm.is_authenticated : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter has successfully authenticated.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-language"}},[t._v("#")]),t._v(" lightdm.language : "),a("a",{attrs:{href:"Language"}},[a("code",[t._v("Language")])]),t._v(" | "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v('The current language or "null" if no language.')]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-languages"}},[t._v("#")]),t._v(" lightdm.languages : "),a("a",{attrs:{href:"Language"}},[a("code",[t._v("Array.<Language>")])])]),t._v(" "),a("p",[t._v("A list of languages to present to the user.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-layout"}},[t._v("#")]),t._v(" lightdm.layout : "),a("a",{attrs:{href:"Layout"}},[a("code",[t._v("Layout")])])]),t._v(" "),a("p",[t._v("The currently active layout for the selected user.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-layouts"}},[t._v("#")]),t._v(" lightdm.layouts : "),a("a",{attrs:{href:"Layout"}},[a("code",[t._v("Array.<Layout>")])])]),t._v(" "),a("p",[t._v("A list of keyboard layouts to present to the user.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-lock-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-lock-hint"}},[t._v("#")]),t._v(" lightdm.lock_hint : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the greeter was started as a lock screen.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-remote-sessions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-remote-sessions"}},[t._v("#")]),t._v(" lightdm.remote_sessions : "),a("a",{attrs:{href:"Session"}},[a("code",[t._v("Array.<Session>")])])]),t._v(" "),a("p",[t._v("A list of remote sessions.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-select-guest-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-select-guest-hint"}},[t._v("#")]),t._v(" lightdm.select_guest_hint : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether or not the guest account should be selected by default.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-select-user-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-select-user-hint"}},[t._v("#")]),t._v(" lightdm.select_user_hint : "),a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("The username to select by default.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-sessions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-sessions"}},[t._v("#")]),t._v(" lightdm.sessions : "),a("a",{attrs:{href:"Session"}},[a("code",[t._v("Array.<Session>")])])]),t._v(" "),a("p",[t._v("List of available sessions.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-show-manual-login-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-show-manual-login-hint"}},[t._v("#")]),t._v(" lightdm.show_manual_login_hint : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v('Check if a manual login option should be shown. If "true", the theme should\nprovide a way for a username to be entered manually. Otherwise, themes that show\na user list may limit logins to only those users.')]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-show-remote-login-hint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-show-remote-login-hint"}},[t._v("#")]),t._v(" lightdm.show_remote_login_hint : "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v('Check if a remote login option should be shown. If "true", the theme should provide\na way for a user to log into a remote desktop server.')]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true\n"),a("strong",[t._v("Internal")]),t._v(":")]),t._v(" "),a("h2",{attrs:{id:"lightdm-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-users"}},[t._v("#")]),t._v(" lightdm.users : "),a("a",{attrs:{href:"User"}},[a("code",[t._v("Array.<User>")])])]),t._v(" "),a("p",[t._v("List of available users.")]),t._v(" "),a("p",[a("strong",[t._v("Read only")]),t._v(": true")]),t._v(" "),a("h2",{attrs:{id:"lightdm-authentication-complete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-authentication-complete"}},[t._v("#")]),t._v(" lightdm.authentication_complete : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the greeter has completed authentication.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-autologin-timer-expired"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-autologin-timer-expired"}},[t._v("#")]),t._v(" lightdm.autologin_timer_expired : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the automatic login timer has expired.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightness-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightness-update"}},[t._v("#")]),t._v(" lightdm.brightness_update : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when brightness is updated")]),t._v(" "),a("h2",{attrs:{id:"lightdm-battery-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-battery-update"}},[t._v("#")]),t._v(" lightdm.battery_update : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when battery is updated")]),t._v(" "),a("h2",{attrs:{id:"lightdm-idle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-idle"}},[t._v("#")]),t._v(" lightdm.idle : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the user has logged in and the greeter is no longer needed.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-reset"}},[t._v("#")]),t._v(" lightdm.reset : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the user is returning to a greeter that\nwas previously marked idle.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-show-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-show-message"}},[t._v("#")]),t._v(" lightdm.show_message : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the greeter should show a message to the user.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-show-prompt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-show-prompt"}},[t._v("#")]),t._v(" lightdm.show_prompt : "),a("a",{attrs:{href:"Signal"}},[a("code",[t._v("Signal")])])]),t._v(" "),a("p",[t._v("Gets emitted when the greeter should show a prompt to the user.")]),t._v(" "),a("h2",{attrs:{id:"lightdm-authenticate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-authenticate"}},[t._v("#")]),t._v(" lightdm.authenticate(username) ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Starts the authentication procedure for a user.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not"),a("br"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("username")]),a("td",[a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")])]),a("td",[a("p",[t._v('A username or "null" to prompt for a username.')])])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-authenticate-as-guest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-authenticate-as-guest"}},[t._v("#")]),t._v(" lightdm.authenticate_as_guest() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Starts the authentication procedure for the guest user.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not")]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightnessset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightnessset"}},[t._v("#")]),t._v(" "),a("s",[t._v("lightdm.brightnessSet(quantity)")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Deprecated")])]),t._v(": Use "),a("a",{attrs:{href:"Greeter#LightDM_Greeter-brightness_set"}},[a("code",[t._v("brightness_set")])])]),t._v(" "),a("p",[t._v("Set the brightness to quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to set")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightness-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightness-set"}},[t._v("#")]),t._v(" lightdm.brightness_set(quantity)")]),t._v(" "),a("p",[t._v("Set the brightness to quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to set")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightnessincrease"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightnessincrease"}},[t._v("#")]),t._v(" "),a("s",[t._v("lightdm.brightnessIncrease(quantity)")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Deprecated")])]),t._v(": Use "),a("a",{attrs:{href:"Greeter#LightDM_Greeter-brightness_increase"}},[a("code",[t._v("brightness_increase")])])]),t._v(" "),a("p",[t._v("Increase the brightness by quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to increase")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightness-increase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightness-increase"}},[t._v("#")]),t._v(" lightdm.brightness_increase(quantity)")]),t._v(" "),a("p",[t._v("Increase the brightness by quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to increase")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightnessdecrease"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightnessdecrease"}},[t._v("#")]),t._v(" "),a("s",[t._v("lightdm.brightnessDecrease(quantity)")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Deprecated")])]),t._v(": Use "),a("a",{attrs:{href:"Greeter#LightDM_Greeter-brightness_decrease"}},[a("code",[t._v("brightness_decrease")])])]),t._v(" "),a("p",[t._v("Decrease the brightness by quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to decrease")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-brightness-decrease"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-brightness-decrease"}},[t._v("#")]),t._v(" lightdm.brightness_decrease(quantity)")]),t._v(" "),a("p",[t._v("Decrease the brightness by quantity")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),a("td",[a("code",[t._v("number")])]),a("td",[a("p",[t._v("The quantity to decrease")])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-cancel-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-cancel-authentication"}},[t._v("#")]),t._v(" lightdm.cancel_authentication() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Cancel user authentication that is currently in progress.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not")]),t._v(" "),a("h2",{attrs:{id:"lightdm-cancel-autologin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-cancel-autologin"}},[t._v("#")]),t._v(" lightdm.cancel_autologin() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Cancel the automatic login.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not")]),t._v(" "),a("h2",{attrs:{id:"lightdm-hibernate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-hibernate"}},[t._v("#")]),t._v(" lightdm.hibernate() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Triggers the system to hibernate.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(' - "true" if hibernation initiated, otherwise "false"')]),t._v(" "),a("h2",{attrs:{id:"lightdm-respond"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-respond"}},[t._v("#")]),t._v(" lightdm.respond(response) ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Provide a response to a prompt.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not"),a("br"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("response")]),a("td",[a("code",[t._v("string")])])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-restart"}},[t._v("#")]),t._v(" lightdm.restart() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Triggers the system to restart.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(' - "true" if restart initiated, otherwise "false"')]),t._v(" "),a("h2",{attrs:{id:"lightdm-set-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-set-language"}},[t._v("#")]),t._v(" lightdm.set_language(language) ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Set the language for the currently authenticated user.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not"),a("br"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("language")]),a("td",[a("code",[t._v("string")])]),a("td",[a("p",[t._v("The language in the form of a locale specification (e.g.\n'de_DE.UTF-8')")])])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-shutdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-shutdown"}},[t._v("#")]),t._v(" lightdm.shutdown() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Triggers the system to shutdown.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(' - "true" if shutdown initiated, otherwise "false"')]),t._v(" "),a("h2",{attrs:{id:"lightdm-start-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-start-session"}},[t._v("#")]),t._v(" lightdm.start_session(session) ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Start a session for the authenticated user.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(" - Whether it is successful or not"),a("br"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("session")]),a("td",[a("code",[t._v("string")]),t._v(" | "),a("code",[t._v("null")])]),a("td",[a("p",[t._v('The session to log into or "null" to use the default.')])])])])])]),t._v(" "),a("h2",{attrs:{id:"lightdm-suspend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightdm-suspend"}},[t._v("#")]),t._v(" lightdm.suspend() ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Triggers the system to suspend/sleep.")]),t._v(" "),a("p",[a("strong",[t._v("Returns")]),t._v(": "),a("code",[t._v("boolean")]),t._v(' - "true" if suspend/sleep initiated, otherwise "false"')])])}),[],!1,null,null,null);e.default=r.exports}}]);