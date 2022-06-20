# ThemeUtils
Provee varias utilidades para su uso en los temas. El greeter creará
automáticamente una instancia de esta clase cuando éste inicie. La instancia
puede ser accedida con la variable global: `theme_utils`.

## ~~theme_utils.bind\_this(context) ⇒ <code>object</code>~~
***Deprecado***: Este método será quitado en futuras versiones.

Une `this` a la clase, o sea el `context`, para todos los métodos de la clase.

**Retorna**: <code>object</code> - `context` con el objeto `this` unido a todos sus métodos.
<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>context</td><td><code>object</code></td><td><p>Una instancia de clase ES6 con al menos un método.</p>
</td>
    </tr>  </tbody>
</table>

## theme_utils.dirlist(path, only_images, callback)
Retorna el contenido encontrado en el directorio de `path`, considerando
que el `path` normalizado cumple al menos una de las siguientes condiciones:
  * Está ubicado dentro del directorio raíz del tema actual.
  * Ha sido explícitamente permitido por la configuración del greeter.
  * Está ubicado dentro del directorio compartido de datos (`/var/lib/lightdm-data`).
  * Está ubicado en `/tmp`.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Por defecto</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td></td><td><p>La ruta al directorio deseado.</p>
</td>
    </tr><tr>
    <td>only_images</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Incluye solamente imágenes en los resultados.</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td></td><td><p>Función callback a ser llamada con el resultado.</p>
</td>
    </tr>  </tbody>
</table>

## theme_utils.dirlist_sync(path, only_images) ⇒ <code>string[]</code>
Retorna el contenido encontrado en el directorio de `path`, considerando
que el `path` normalizado cumple al menos una de las siguientes condiciones:
  * Está ubicado dentro del directorio raíz del tema actual.
  * Ha sido explícitamente permitido por la configuración del greeter.
  * Está ubicado dentro del directorio compartido de datos (`/var/lib/lightdm-data`).
  * Está ubicado en `/tmp`.

**Disponibilidad**: `nody-greeter`

**Experimental**: Disponible sólo en nody-greeter. NO USAR si deseas compatibilidad entre web-greeter y nody-greeter.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Por defecto</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td></td><td><p>La ruta al directorio deseado.</p>
</td>
    </tr>
<tr>
    <td>only_images</td><td><code>boolean</code></td><td><code>true</code></td><td><p>Incluye solamente imágenes en los resultados.</p>
</tr>
  </tbody>
</table>

**Retorna**: `string[]` - Lista de rutas del contenido.

## theme_utils.get\_current\_localized\_date() ⇒ <code>string</code>
Obtiene la fecha actual en un formato localizado. El idioma local es detectado
de forma automática por defecto, pero puede ser especificada manualmente en la
configuración del greeter.

**Retorna**: <code>string</code> - La fecha actual.

## theme_utils.get\_current\_localized\_time() ⇒ <code>string</code>
Obtiene la hora actual en un formato localizado. El idioma local es detectado
de forma automática por defecto, pero puede ser especificada manualmente en la
configuración del greeter.

**Retorna**: <code>string</code> - La hora actual.
