# Greeter
Clase base para la API del tema en Javascript. Los temas interactuarán directamente
con un objeto derivado de esta clase para facilitar el proceso de inicio de sesión.
El greeter creará automáticamente una instancia cuando éste inicie.
La instancia puede ser accedida usando la variable global: `lightdm`.

## lightdm.authentication\_user : <code>string</code> \| <code>null</code>
El username (nombre de usuario) del usuario que está siendo autenticado o "null"
si no hay una autenticación en progreso.

<ReadOnly />

## lightdm.autologin\_guest : <code>boolean</code>
Si la cuenta de invitado debería de iniciar sesión automáticamente o no
cuando el temporizador expire.

<ReadOnly />

## lightdm.autologin\_timeout : <code>number</code>
El número de segundos a esperar antes de iniciar sesión automáticamente.

<ReadOnly />

## lightdm.autologin\_user : <code>string</code>
El username (nombre de usuario) con el que iniciar sesión automáticamente
cuando el temporizador expire.

<ReadOnly />

## lightdm.batteryData : [<code>Battery</code>](Battery.html) <Deprecated />
***Obsoleto***: Usa [`battery_data`](Greeter.html#lightdm-battery-data)

Obtiene los datos de la batería.

<ReadOnly />

## lightdm.battery\_data : [<code>Battery</code>](Battery.html)
Obtiene los datos de la batería.

<ReadOnly />

## lightdm.brightness : <code>number</code>
El brillo actual.

<ReadOnly :readOnly="false" />

## lightdm.can\_access\_battery : <code>boolean</code>
Si el greeter puede acceder a los datos de la batería o no.

<ReadOnly />

## lightdm.can\_access\_brightness : <code>boolean</code>
Si el greeter puede controlar el brillo de la pantalla o no.

<ReadOnly />

## lightdm.can\_hibernate : <code>boolean</code>
Si el greeter puede hacer que el sistema hiberne o no.

<ReadOnly />

## lightdm.can\_restart : <code>boolean</code>
Si el greeter puede hacer que el sistema se reinicie o no.

<ReadOnly />

## lightdm.can\_shutdown : <code>boolean</code>
Si el greeter puede hacer que el sistema se apague o no.

<ReadOnly />

## lightdm.can\_suspend : <code>boolean</code>
Si el greeter puede hacer que el sistema se suspenda o no.

<ReadOnly />

## lightdm.default\_session : <code>string</code>
El nombre de la sesión por defecto.

<ReadOnly />

## lightdm.has\_guest\_account : <code>boolean</code>
Si las sesiones de invitado están permitidas o no.

<ReadOnly />

## lightdm.hide\_users\_hint : <code>boolean</code>
Si las cuentas de usuario deberían de estar ocultas o no.

<ReadOnly />

## lightdm.hostname : <code>string</code>
El nombre de host del sistema.

<ReadOnly />

## lightdm.in\_authentication : <code>boolean</code>
Si el greeter está en proceso de autenticación o no.

<ReadOnly />

## lightdm.is\_authenticated : <code>boolean</code>
Si el usuario se ha autenticado exitosamente o no.

<ReadOnly />

## lightdm.language : [<code>Language</code>](Language.html) \| <code>null</code>
El idioma actual o "null".

<ReadOnly />

## lightdm.languages : [<code>Array.&lt;Language&gt;</code>](Language.html)
Una lista de los lenguajes a presentar al usuario.

<ReadOnly />

## lightdm.layout : [<code>Layout</code>](Layout.html)
La fuente de entrada de teclado activa para el usuario seleccionado.

<ReadOnly :readOnly="false" />

## lightdm.layouts : [<code>Array.&lt;Layout&gt;</code>](Layout.html)
Una lista de fuentes de entrada de teclado a presentar al usuario.

<ReadOnly />

## lightdm.lock\_hint : <code>boolean</code>
Si el greeter fue iniciado como una pantalla de bloqueo o no.

<ReadOnly />

## lightdm.remote\_sessions : [<code>Array.&lt;Session&gt;</code>](Session.html)
Una lista de sesiones remotas.

<ReadOnly />

## lightdm.select\_guest\_hint : <code>boolean</code>
Si el usuario invitado debería de ser seleccionado por defecto.

<ReadOnly />

## lightdm.select\_user\_hint : <code>string</code> \| <code>undefined</code>
El username (nombre de usuario) a seleccionar por defecto.

<ReadOnly />

## lightdm.sessions : [<code>Array.&lt;Session&gt;</code>](Session.html)
Una lista de sesiones disponibles.

<ReadOnly />

## lightdm.show\_manual\_login\_hint : <code>boolean</code>
Si una opción de inicio de sesión manual debería de mostrarse o no. Si es "true",
el tema debería de proveer una forma manual de ingresar el usuario. De otro modo,
los temas sólo deberían de mostrar la lista de usuarios proveída por el greeter.

<ReadOnly />

## lightdm.show\_remote\_login\_hint : <code>boolean</code>
Si una opción de inicio de sesión remoto debería de mostrarse o no. Si es "true",
el tema debería de proveer al usuario una forma de ingresar a un servidor de
escritorio remoto.

<ReadOnly />

**Interno**

## lightdm.users : [<code>Array.&lt;User&gt;</code>](User.html)
Lista de usuarios disponibles.

<ReadOnly />

## lightdm.authentication\_complete : [<code>Signal</code>](Signal.html)
Es emitida cuando el greeter ha completado la autenticación.


## lightdm.autologin\_timer\_expired : [<code>Signal</code>](Signal.html)
Es emitida cuando el temporizador de inicio de sesión automático ha expirado.


## lightdm.brightness\_update : [<code>Signal</code>](Signal.html)
Es emitida cuando el brillo de pantalla es actualizado.


## lightdm.battery\_update : [<code>Signal</code>](Signal.html)
Es emitida cuando los datos de la batería son actualizados.


## lightdm.idle : [<code>Signal</code>](Signal.html)
Es emitida cuando el usuario ha iniciado sesión y el greeter ya no es necesario.


## lightdm.reset : [<code>Signal</code>](Signal.html)
Es emitida cuando el usuario regresa a un greeter que previamente fue marcado como idle.


## lightdm.show\_message : [<code>Signal</code>](Signal.html)
Es emitida cuando el greeter manda un mensaje al usuario.


## lightdm.show\_prompt : [<code>Signal</code>](Signal.html)
Es emitida cuando el greeter solicita una respuesta al usuario.


## lightdm.authenticate(username) ⇒ <code>boolean</code>
Inicia el procedimiento de autenticación del usuario.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.
<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>username</td><td><code>string</code> | <code>null</code></td><td><p>Un username (nombre de usuario) &quot;null&quot; para solicitar un nombre de usuario.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.authenticate\_as\_guest() ⇒ <code>boolean</code>
Inicia el procedimiento de autenticación para el usuario invitado.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.

## lightdm.brightnessSet(quantity) <Deprecated />
***Obsoleto***: Usa [`brightness_set`](Greeter.html#lightdm-brightness-set)

Establece el brillo a cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a establecer.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_set(quantity)
Establece el brillo a cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a establecer.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightnessIncrease(quantity) <Deprecated />
***Obsoleto***: Usa [`brightness_increase`](Greeter.html#lightdm-brightness-increase)

Aumenta el brillo por cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a incrementar.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_increase(quantity)
Aumenta el brillo por cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a incrementar.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightnessDecrease(quantity) <Deprecated />
***Obsoleto***: Usa [`brightness_decrease`](Greeter.html#lightdm-brightness-decrease)

Disminuye el brillo por cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a disminuir.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.brightness\_decrease(quantity)
Disminuye el brillo por cierta cantidad.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>quantity</td><td><code>number</code></td><td><p>La cantidad a disminuir.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.cancel\_authentication() ⇒ <code>boolean</code>
Cancela una autenticación de usuario que esté actualmente en progreso.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.

## lightdm.cancel\_autologin() ⇒ <code>boolean</code>
Cancela el login automático.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.

## lightdm.hibernate() ⇒ <code>boolean</code>
Provoca que el sistema hiberne.

**Retorna**: <code>boolean</code> - "true" si la hibernación fue iniciada, "false" en caso contrario

## lightdm.respond(response) ⇒ <code>boolean</code>
Provee una respuesta a una solicitud.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.
<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>response</td><td><code>string</code></td>
    </tr>  </tbody>
</table>


## lightdm.restart() ⇒ <code>boolean</code>
Provoca que el sistema se reinicie.

**Retorna**: <code>boolean</code> - "true" si el reinicio fue iniciado, "false" en caso contrario

## lightdm.set\_language(language) ⇒ <code>boolean</code>
Establece el idioma para el usuario autenticado actual.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.
<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>language</td><td><code>string</code></td><td><p>El idioma en forma de una especificación local (e.j.
    &#39;de_DE.UTF-8&#39;)</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.shutdown() ⇒ <code>boolean</code>
Provoca que el sistema se apague.

**Retorna**: <code>boolean</code> - "true" si el apagado fue iniciado, "false" en caso contrario

## lightdm.start\_session(session) ⇒ <code>boolean</code>
Inicia una sesión para el usuario autenticado.

**Retorna**: <code>boolean</code> - Si fue exitoso o no.
<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>session</td><td><code>string</code> | <code>null</code></td><td><p>El nombre de la sesión a iniciar o &quot;null&quot; para usar la sesión por defecto.</p>
</td>
    </tr>  </tbody>
</table>


## lightdm.suspend() ⇒ <code>boolean</code>
Provoca que el sistema se suspenda.

**Retorna**: <code>boolean</code> - "true" si el suspendido fue iniciado, "false" en caso contrario
