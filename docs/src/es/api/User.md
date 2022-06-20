# User
Interfaz de objeto que contiene información sobre una cuenta de usuario en el
sistema. Las instancias no son creadas por el código del tema, sino por
[`LightDM.Greeter`](Greeter.html)

## background : <code>string</code>
El fondo de pantalla del usuario, si es que existe.

**Sólo lectura**: verdadero

## display\_name : <code>string</code>
El nombre real del usuario.

**Sólo lectura**: verdadero

## language : <code>string</code>
El idioma del usuario.

**Sólo lectura**: verdadero

## layout : <code>string</code>
La fuente de entrada de teclado del usuario.

**Sólo lectura**: verdadero

## layouts : <code>Array.&lt;string&gt;</code>
Las fuentes de entrada de teclado que el usuario posee.
Como advertencia, no deberías depender de esta propiedad;
en cambio, usa [`greeter_config.layouts`](GreeterConfig.html#greeter-config-layouts).

**Sólo lectura**: verdadero

## image : <code>string</code>
La imagen del usuario.

**Sólo lectura**: verdadero

## home\_directory : <code>string</code>
El directorio de inicio del usuario.

**Sólo lectura**: verdadero

## username : <code>string</code>
El username (nombre de usuario) del usuario.

**Sólo lectura**: verdadero

## logged\_in : <code>Boolean</code>
Si el usuario tiene una sesión activa o no.

**Sólo lectura**: verdadero

## session : <code>string</code>
La última sesión que el usuario ha iniciado.

**Sólo lectura**: verdadero
