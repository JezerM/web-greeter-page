# GreeterConfig
Provee una manera de acceder a los valores de configuración del greeter,
ubicados en `/etc/lightdm/web-greeter.yml`. El greeter creará una instancia
de esta clase cuando éste inicie. La instancia puede ser accedida con la
variable global: `greeter_config`.

## greeter_config.branding : <code>object</code>
Contiene las llaves/valores de la sección `branding` de la configuración.

**Sólo lectura**: verdadero

**Propiedades**

<table>
  <thead>
    <tr>
      <th>Nombre</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>background_images_dir</td><td><code>string</code></td><td><p>Ruta del directorio que contiene las imágenes de fondo de pantalla para ser usados en los temas del greeter.</p>
</td>
    </tr><tr>
    <td>logo</td><td><code>string</code></td><td><p>Ruta al logo de la distribución para su uso en los temas del greeter.</p>
</td>
    </tr><tr>
    <td>user_image</td><td><code>string</code></td><td><p>Imagen/avatar de usuario por defecto. Esto es usado en temas para usuarios que no tienen configurado una imagen o avatar.</p>
</td>
    </tr>  </tbody>
</table>

## greeter_config.greeter : <code>object</code>
Contiene las llaves/valores de la sección `greeter` de la configuración.

**Sólo lectura**: verdadero

**Propiedades**

<table>
  <thead>
    <tr>
      <th>Nombre</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>debug_mode</td><td><code>boolean</code></td><td><p>Modo debug (depuración) del greeter.</p>
</td>
    </tr><tr>
    <td>detect_theme_errors</td><td><code>boolean</code></td><td><p>Provee una opción para cargar un tema por defecto cuando se detecten errores en el tema actual.</p>
</td>
    </tr><tr>
    <td>screensaver_timeout</td><td><code>number</code></td><td><p>Oscurece la pantalla luego de estos segundos de inactividad.</p>
</td>
    </tr><tr>
    <td>secure_mode</td><td><code>boolean</code></td><td><p>Don&#39;t allow themes to make remote http requests.</p>
</td>
    </tr><tr>
    <td>time_language</td><td><code>string</code></td><td><p>Language to use when displaying the time or &quot;&quot;.</p>
</td>
    </tr><tr>
    <td>theme</td><td><code>string</code></td><td><p>El nombre del tema a usar por el greeter.</p>
</td>
    </tr>  </tbody>
</table>

## greeter_config.features : <code>Object</code>
Contiene las llaves/valores de la sección `features` de la configuración.

**Sólo lectura**: verdadero

**Propiedades**

<table>
  <thead>
    <tr>
      <th>Nombre</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>battery</td><td><code>boolean</code></td><td><p>Permite que el greeter y los temas puedan obtener el estado de la batería.</p>
</td>
    </tr><tr>
    <td>backlight</td><td><code>Object</code></td><td></td>
    </tr><tr>
    <td>enabled</td><td><code>boolean</code></td><td><p>Permite que el greeter y los temas puedan controlar el brillo de la pantalla.</p>
</td>
    </tr><tr>
    <td>value</td><td><code>number</code></td><td><p>La cantidad a incrementar/disminuir de brillo por el greeter.</p>
</td>
    </tr><tr>
    <td>steps</td><td><code>number</code></td><td><p>Cuantos pasos son necesarios para hacer el cambio.</p>
</td>
    </tr>  </tbody>
</table>

## greeter_config.layouts : [<code>Array.&lt;Layout&gt;</code>](Layout.html)
Contiene una lista de fuentes de entrada preferidas, de la sección `layouts` de la configuración.

**Sólo lectura**: verdadero
