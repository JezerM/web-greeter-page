# Greeter
Base class for the greeter's Theme JavaScript API. Greeter themes will interact
directly with an object derived from this class to facilitate the user log-in process.
The greeter will automatically create an instance when it starts.
The instance can be accessed using the global variable: `lightdm`.

## lightdm.authentication\_user : <code>string</code> \| <code>null</code>
The username of the user being authenticated or "null"
if no authentication is in progress

**Read only**: true

## lightdm.autologin\_guest : <code>boolean</code>
Whether or not the guest account should be automatically logged
into when the timer expires.

**Read only**: true

## lightdm.autologin\_timeout : <code>number</code>
The number of seconds to wait before automatically logging in.

**Read only**: true

## lightdm.autologin\_user : <code>string</code>
The username with which to automattically log in when the timer expires.

**Read only**: true

## ~~lightdm.batteryData : [<code>Battery</code>](Battery.html)~~
***Deprecated***: Use [`battery_data`](Greeter.html#lightdm-battery-data)

Gets the battery data.

**Read only**: true

## lightdm.battery\_data : [<code>Battery</code>](Battery.html)
Gets the battery data.

**Read only**: true

## lightdm.brightness : <code>number</code>
The current brightness


## lightdm.can\_access\_battery : <code>boolean</code>
Whether or not the greeter can access to battery data.

**Read only**: true

## lightdm.can\_access\_brightness : <code>boolean</code>
Whether or not the greeter can control display brightness.

**Read only**: true

## lightdm.can\_hibernate : <code>boolean</code>
Whether or not the greeter can make the system hibernate.

**Read only**: true

## lightdm.can\_restart : <code>boolean</code>
Whether or not the greeter can make the system restart.

**Read only**: true

## lightdm.can\_shutdown : <code>boolean</code>
Whether or not the greeter can make the system shutdown.

**Read only**: true

## lightdm.can\_suspend : <code>boolean</code>
Whether or not the greeter can make the system suspend/sleep.

**Read only**: true

## lightdm.default\_session : <code>string</code>
The name of the default session.

**Read only**: true

## lightdm.has\_guest\_account : <code>boolean</code>
Whether or not guest sessions are supported.

**Read only**: true

## lightdm.hide\_users\_hint : <code>boolean</code>
Whether or not user accounts should be hidden.

**Read only**: true

## lightdm.hostname : <code>string</code>
The system's hostname.

**Read only**: true

## lightdm.in\_authentication : <code>boolean</code>
Whether or not the greeter is in the process of authenticating.

**Read only**: true

## lightdm.is\_authenticated : <code>boolean</code>
Whether or not the greeter has successfully authenticated.

**Read only**: true

## lightdm.language : [<code>Language</code>](Language.html) \| <code>null</code>
The current language or "null" if no language.

**Read only**: true

## lightdm.languages : [<code>Array.&lt;Language&gt;</code>](Language.html)
A list of languages to present to the user.

**Read only**: true

## lightdm.layout : [<code>Layout</code>](Layout.html)
The currently active layout for the selected user.


## lightdm.layouts : [<code>Array.&lt;Layout&gt;</code>](Layout.html)
A list of keyboard layouts to present to the user.

**Read only**: true

## lightdm.lock\_hint : <code>boolean</code>
Whether or not the greeter was started as a lock screen.

**Read only**: true

## lightdm.remote\_sessions : [<code>Array.&lt;Session&gt;</code>](Session.html)
A list of remote sessions.

**Read only**: true

## lightdm.select\_guest\_hint : <code>boolean</code>
Whether or not the guest account should be selected by default.

**Read only**: true

## lightdm.select\_user\_hint : <code>string</code> \| <code>undefined</code>
The username to select by default.

**Read only**: true

## lightdm.sessions : [<code>Array.&lt;Session&gt;</code>](Session.html)
List of available sessions.

**Read only**: true

## lightdm.show\_manual\_login\_hint : <code>boolean</code>
Check if a manual login option should be shown. If "true", the theme should
provide a way for a username to be entered manually. Otherwise, themes that show
a user list may limit logins to only those users.

**Read only**: true

## lightdm.show\_remote\_login\_hint : <code>boolean</code>
Check if a remote login option should be shown. If "true", the theme should provide
a way for a user to log into a remote desktop server.

**Read only**: true
**Internal**:   

## lightdm.users : [<code>Array.&lt;User&gt;</code>](User.html)
List of available users.

**Read only**: true

## lightdm.authentication\_complete : [<code>Signal</code>](Signal.html)
Gets emitted when the greeter has completed authentication.


## lightdm.autologin\_timer\_expired : [<code>Signal</code>](Signal.html)
Gets emitted when the automatic login timer has expired.


## lightdm.brightness\_update : [<code>Signal</code>](Signal.html)
Gets emitted when brightness is updated


## lightdm.battery\_update : [<code>Signal</code>](Signal.html)
Gets emitted when battery is updated


## lightdm.idle : [<code>Signal</code>](Signal.html)
Gets emitted when the user has logged in and the greeter is no longer needed.


## lightdm.reset : [<code>Signal</code>](Signal.html)
Gets emitted when the user is returning to a greeter that
was previously marked idle.


## lightdm.show\_message : [<code>Signal</code>](Signal.html)
Gets emitted when the greeter should show a message to the user.


## lightdm.show\_prompt : [<code>Signal</code>](Signal.html)
Gets emitted when the greeter should show a prompt to the user.


## lightdm.authenticate(username) ⇒ <code>boolean</code>
Starts the authentication procedure for a user.

**Returns**: <code>boolean</code> - Whether it is successful or not  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>username</td><td><code>string</code> | <code>null</code></td><td><p>A username or &quot;null&quot; to prompt for a username.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.authenticate\_as\_guest() ⇒ <code>boolean</code>
Starts the authentication procedure for the guest user.

**Returns**: <code>boolean</code> - Whether it is successful or not  

## ~~lightdm.brightnessSet(quantity)~~
***Deprecated***: Use [`brightness_set`](Greeter.html#lightdm-brightness-set)

Set the brightness to quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to set</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_set(quantity)
Set the brightness to quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to set</p>
</td>
    </tr>  </tbody>
</table>


## ~~lightdm.brightnessIncrease(quantity)~~
***Deprecated***: Use [`brightness_increase`](Greeter.html#lightdm-brightness-increase)

Increase the brightness by quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to increase</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_increase(quantity)
Increase the brightness by quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to increase</p>
</td>
    </tr>  </tbody>
</table>


## ~~lightdm.brightnessDecrease(quantity)~~
***Deprecated***: Use [`brightness_decrease`](Greeter.html#lightdm-brightness-decrease)

Decrease the brightness by quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to decrease</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_decrease(quantity)
Decrease the brightness by quantity

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>The quantity to decrease</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.cancel\_authentication() ⇒ <code>boolean</code>
Cancel user authentication that is currently in progress.

**Returns**: <code>boolean</code> - Whether it is successful or not  

## lightdm.cancel\_autologin() ⇒ <code>boolean</code>
Cancel the automatic login.

**Returns**: <code>boolean</code> - Whether it is successful or not  

## lightdm.hibernate() ⇒ <code>boolean</code>
Triggers the system to hibernate.

**Returns**: <code>boolean</code> - "true" if hibernation initiated, otherwise "false"  

## lightdm.respond(response) ⇒ <code>boolean</code>
Provide a response to a prompt.

**Returns**: <code>boolean</code> - Whether it is successful or not  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>response</td><td><code>string</code></td>
    </tr>  </tbody>
</table>


## lightdm.restart() ⇒ <code>boolean</code>
Triggers the system to restart.

**Returns**: <code>boolean</code> - "true" if restart initiated, otherwise "false"  

## lightdm.set\_language(language) ⇒ <code>boolean</code>
Set the language for the currently authenticated user.

**Returns**: <code>boolean</code> - Whether it is successful or not  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>language</td><td><code>string</code></td><td><p>The language in the form of a locale specification (e.g.
    &#39;de_DE.UTF-8&#39;)</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.shutdown() ⇒ <code>boolean</code>
Triggers the system to shutdown.

**Returns**: <code>boolean</code> - "true" if shutdown initiated, otherwise "false"  

## lightdm.start\_session(session) ⇒ <code>boolean</code>
Start a session for the authenticated user.

**Returns**: <code>boolean</code> - Whether it is successful or not  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>session</td><td><code>string</code> | <code>null</code></td><td><p>The session to log into or &quot;null&quot; to use the default.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.suspend() ⇒ <code>boolean</code>
Triggers the system to suspend/sleep.

**Returns**: <code>boolean</code> - "true" if suspend/sleep initiated, otherwise "false"  
