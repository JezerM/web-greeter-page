# Window
El objeto global window.

## window.lightdm : [<code>Greeter</code>](Greeter.html)
La instancia del greeter.

## window.greeter\_config : [<code>GreeterConfig</code>](GreeterConfig.html)
Greeter Config - Accede a los valores de la configuración del greeter.

## window.theme\_utils : [<code>ThemeUtils</code>](ThemeUtils.html)
Theme Utils - Varias utilidades para su uso en los temas.

## "GreeterReady"
Greeter Ready Event. Los temas no deberían de inicializar hasta que este evento
sea activado. Evento accesible a través de `window._ready_event`.

## "GreeterBroadcastEvent"
Greeter Broadcast Event. El evento es activado cuando un mensaje broadcast es
enviado con [`greeter_comm.broadcast`](GreeterComm.html#greeter-comm-broadcast).

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>window</td><td><code>WindowMetadata</code></td><td>Metadatos de la ventana de origen.</td>
</tr>
<tr>
    <td>data</td><td><code>unknown</code></td></td><td>Datos personalizados recibidos.</td>
</tr>
  </tbody>
</table>
