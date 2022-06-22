(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{204:function(t,e,i){"use strict";i.r(e);var a=i(6),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"themeutils"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#themeutils"}},[t._v("#")]),t._v(" ThemeUtils")]),t._v(" "),i("p",[t._v("Provides various utility methods for use in greeter themes. The greeter will automatically\ncreate an instance of this class when it starts. The instance can be accessed\nwith the global variable: "),i("code",[t._v("theme_utils")])]),t._v(" "),i("h2",{attrs:{id:"theme-utils-bind-this"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#theme-utils-bind-this"}},[t._v("#")]),t._v(" "),i("s",[t._v("theme_utils.bind_this(context) ⇒ "),i("code",[t._v("object")])])]),t._v(" "),i("p",[i("em",[i("strong",[t._v("Deprecated")])]),t._v(": This method will be removed in future versions")]),t._v(" "),i("p",[t._v("Binds "),i("code",[t._v("this")]),t._v(" to class, "),i("code",[t._v("context")]),t._v(", for all of the class's methods.")]),t._v(" "),i("p",[i("strong",[t._v("Returns")]),t._v(": "),i("code",[t._v("object")]),t._v(" - "),i("code",[t._v("context")]),t._v(" with "),i("code",[t._v("this")]),t._v(" bound to it for all of its methods."),i("br"),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Param")]),i("th",[t._v("Type")]),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("context")]),i("td",[i("code",[t._v("object")])]),i("td",[i("p",[t._v("An ES6 class instance with at least one method.")])])])])])]),t._v(" "),i("h2",{attrs:{id:"theme-utils-dirlist"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#theme-utils-dirlist"}},[t._v("#")]),t._v(" theme_utils.dirlist(path, only_images, callback)")]),t._v(" "),i("p",[t._v("Returns the contents of directory found at "),i("code",[t._v("path")]),t._v(" provided that the (normalized) "),i("code",[t._v("path")]),t._v("\nmeets at least one of the following conditions:")]),t._v(" "),i("ul",[i("li",[t._v("Is located within the greeter themes' root directory.")]),t._v(" "),i("li",[t._v("Has been explicitly allowed in the greeter's config file.")]),t._v(" "),i("li",[t._v("Is located within the greeter's shared data directory ("),i("code",[t._v("/var/lib/lightdm-data")]),t._v(").")]),t._v(" "),i("li",[t._v("Is located in "),i("code",[t._v("/tmp")]),t._v(".")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Param")]),i("th",[t._v("Type")]),i("th",[t._v("Default")]),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("path")]),i("td",[i("code",[t._v("string")])]),i("td"),i("td",[i("p",[t._v("The path to the desired directory.")])])]),i("tr",[i("td",[t._v("only_images")]),i("td",[i("code",[t._v("boolean")])]),i("td",[i("code",[t._v("true")])]),i("td",[i("p",[t._v("Include only images in the results. Default "),i("code",[t._v("true")]),t._v(".")])])]),i("tr",[i("td",[t._v("callback")]),i("td",[i("code",[t._v("function")])]),i("td"),i("td",[i("p",[t._v("Callback function to be called with the result.")])])])])]),t._v(" "),i("h2",{attrs:{id:"theme-utils-dirlist-sync"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#theme-utils-dirlist-sync"}},[t._v("#")]),t._v(" theme_utils.dirlist_sync(path, only_images) ⇒ "),i("code",[t._v("string[]")])]),t._v(" "),i("p",[t._v("Returns the contents of directory found at "),i("code",[t._v("path")]),t._v(" provided that the (normalized) "),i("code",[t._v("path")]),t._v("\nmeets at least one of the following conditions:")]),t._v(" "),i("ul",[i("li",[t._v("Is located within the greeter themes' root directory.")]),t._v(" "),i("li",[t._v("Has been explicitly allowed in the greeter's config file.")]),t._v(" "),i("li",[t._v("Is located within the greeter's shared data directory ("),i("code",[t._v("/var/lib/lightdm-data")]),t._v(").")]),t._v(" "),i("li",[t._v("Is located in "),i("code",[t._v("/tmp")]),t._v(".")])]),t._v(" "),i("p",[i("strong",[t._v("Availability")]),t._v(": "),i("code",[t._v("nody-greeter")])]),t._v(" "),i("p",[i("strong",[t._v("Experimental")]),t._v(": Available only for nody-greeter. DO NOT use it if you want compatibility between web-greeter and nody-greeter.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Param")]),i("th",[t._v("Type")]),i("th",[t._v("Default")]),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("path")]),i("td",[i("code",[t._v("string")])]),i("td"),i("td",[i("p",[t._v("The path to the desired directory.")])])]),t._v(" "),i("tr",[i("td",[t._v("only_images")]),i("td",[i("code",[t._v("boolean")])]),i("td",[i("code",[t._v("true")])]),i("td",[i("p",[t._v("Include only images in the results. Default "),i("code",[t._v("true")]),t._v(".")])])])])]),t._v(" "),i("p",[i("strong",[t._v("Returns")]),t._v(": "),i("code",[t._v("string[]")]),t._v(" - List of content paths")]),t._v(" "),i("h2",{attrs:{id:"theme-utils-get-current-localized-date"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#theme-utils-get-current-localized-date"}},[t._v("#")]),t._v(" theme_utils.get_current_localized_date() ⇒ "),i("code",[t._v("string")])]),t._v(" "),i("p",[t._v("Get the current date in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.")]),t._v(" "),i("p",[i("strong",[t._v("Returns")]),t._v(": "),i("code",[t._v("string")]),t._v(" - The current date.")]),t._v(" "),i("h2",{attrs:{id:"theme-utils-get-current-localized-time"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#theme-utils-get-current-localized-time"}},[t._v("#")]),t._v(" theme_utils.get_current_localized_time() ⇒ "),i("code",[t._v("string")])]),t._v(" "),i("p",[t._v("Get the current time in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.")]),t._v(" "),i("p",[i("strong",[t._v("Returns")]),t._v(": "),i("code",[t._v("string")]),t._v(" - The current time.")])])}),[],!1,null,null,null);e.default=r.exports}}]);