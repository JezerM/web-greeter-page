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

| Parámetro | Tipo | Descripción |
| --------- | ---- | ----------- |
| window | <code>WindowMetadata</code> | Metadatos de la ventada de origen. |
| data | <code>unknown</code> | Datos personalizados recibidos. |
