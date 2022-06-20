# ThemeUtils
Provides various utility methods for use in greeter themes. The greeter will automatically
create an instance of this class when it starts. The instance can be accessed
with the global variable: `theme_utils`

## ~~theme_utils.bind\_this(context) ⇒ <code>object</code>~~
***Deprecated***: This method will be removed in future versions

Binds `this` to class, `context`, for all of the class's methods.

**Returns**: <code>object</code> - `context` with `this` bound to it for all of its methods.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>context</td><td><code>object</code></td><td><p>An ES6 class instance with at least one method.</p>
</td>
    </tr>  </tbody>
</table>

## theme_utils.dirlist(path, only_images, callback)
Returns the contents of directory found at `path` provided that the (normalized) `path`
meets at least one of the following conditions:
  * Is located within the greeter themes' root directory.
  * Has been explicitly allowed in the greeter's config file.
  * Is located within the greeter's shared data directory (`/var/lib/lightdm-data`).
  * Is located in `/tmp`.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td></td><td><p>The path to the desired directory.</p>
</td>
    </tr><tr>
    <td>only_images</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Include only images in the results. Default <code>true</code>.</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td></td><td><p>Callback function to be called with the result.</p>
</td>
    </tr>  </tbody>
</table>

## theme_utils.dirlist_sync(path, only_images) ⇒ <code>string[]</code>
Returns the contents of directory found at `path` provided that the (normalized) `path`
meets at least one of the following conditions:
  * Is located within the greeter themes' root directory.
  * Has been explicitly allowed in the greeter's config file.
  * Is located within the greeter's shared data directory (`/var/lib/lightdm-data`).
  * Is located in `/tmp`.

**Availability**: `nody-greeter`

**Experimental**: Available only for nody-greeter. DO NOT use it if you want compatibility between web-greeter and nody-greeter.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td></td><td><p>The path to the desired directory.</p>
</td>
    </tr>
<tr>
    <td>only_images</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Include only images in the results. Default <code>true</code>.</p></td>
</tr>
  </tbody>
</table>

**Returns**: `string[]` - List of content paths

## theme_utils.get\_current\_localized\_date() ⇒ <code>string</code>
Get the current date in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.

**Returns**: <code>string</code> - The current date.

## theme_utils.get\_current\_localized\_time() ⇒ <code>string</code>
Get the current time in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.

**Returns**: <code>string</code> - The current time.
