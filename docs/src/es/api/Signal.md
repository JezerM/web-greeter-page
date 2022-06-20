# Signal
Interfaz para las señales conectadas a LightDM. Estas no son creadas por el
código del tema, sino por Web Greeter. Cuando Web Greeter activa una señal,
todos sus callbacks son ejecutados.

## connect(callback)
Conecta un callback a la señal.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>El callback a conectar.</p>
</td>
    </tr>  </tbody>
</table>

## disconnect(callback)
Disconnects a callback to the signal.

<table>
  <thead>
    <tr>
      <th>Parámetro</th><th>Tipo</th><th>Descripción</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>El callback a desconectar.</p>
</td>
    </tr>  </tbody>
</table>

