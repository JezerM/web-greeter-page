# Session
interfaz de objeto que contiene información sobre una sesión. Las instancias
no son creadas por el código del tema, sino por [`LightDM.Greeter`](Greeter.html).

## name : <code>string</code>
El nombre de la sesión.

**Sólo lectura**: verdadero

## key : <code>string</code>
La llave de la sesión.

**Sólo lectura**: verdadero

## comment : <code>string</code>
El comentario de la sesión.

**Sólo lectura**: verdadero

## type : <code>string</code>
El tipo de sesión (X11 ó Wayland).

**Sólo lectura**: verdadero
