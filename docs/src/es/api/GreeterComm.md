# GreeterComm
Provee un sistema de comunicación entre múltiples ventanas, útil para
entornos de múltiples monitores. La instancia puede ser accedida con la
variable global: `greeter_comm`.

## greeter_comm.window_metadata : <code>WindowMetadata</code>
Contiene los metadatos de la ventana actual, tal como el tamaño,
posición y si está en la pantalla principal o no.

<table>
  <thead>
    <tr>
      <th>Nombre</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
  <td>id</td><td><code>string</code></td><td>ID de ventana</td>
</tr>
<tr>
  <td>is_primary</td><td><code>boolean</code></td><td>Si la ventana está en la pantalla principal/primaria o no.</td>
</tr>
<tr>
  <td>position</td><td><code>Object</code></td><td>Posición de la ventana en la pantalla.</td>
</tr>
<tr>
  <td>position.x</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>position.y</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>size</td><td><code>Object</code></td><td>Tamaño de la ventana.</td>
</tr>
<tr>
  <td>size.width</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>size.height</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>overallBoundary</td><td><code>Object</code></td><td>El estado total de todas las pantallas. Esto puede ser usado, por ejemplo, para asistir en el posicionamiento correcto de fondos de pantalla en múltiples monitores.</td>
</tr>
<tr>
  <td>overallBoundary.minX</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>overallBoundary.minY</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>overallBoundary.maxX</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>overallBoundary.maxY</td><td><code>number</code></td><td></td>
</tr>
  </tbody>
</table>

## greeter_comm.broadcast(data)
Envía un mensaje a todas las ventanas actualmente abiertas por el greeter.
Recibe el mensaje a través de ["GreeterBroadcastEvent"](window.html#greeterbroadcastevent).

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Por defecto</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>unknown</code></td><td><code>undefined</code></td><td>Datos personalizados a enviar.</td>
</tr>
  </tbody>
</table>
