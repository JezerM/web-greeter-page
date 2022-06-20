# Battery

Interfaz de objeto que contiene información sobre la batería del sistema.
Este objeto no es instanciado por el código del tema, sino por [`LightDM.Greeter`](Greeter.html).

## name : <code>string</code>
El nombre de la batería.

**Sólo lectura**: verdadero

## level : <code>string</code>
El nivel de la batería.

**Sólo lectura**: verdadero

## status : <code>string</code>
El estado de la batería.

**Sólo lectura**: verdadero

## ac\_status : <code>boolean</code>
Si el adaptador de corriente está conectado o no.

**Sólo lectura**: verdadero

## capacity : <code>number</code>
La capacidad total de la batería.

**Sólo lectura**: verdadero

## time : <code>string</code>
El tiempo hasta que se descargue.

**Sólo lectura**: verdadero

## watt : <code>boolean</code>
El nivel de watts de la batería.

**Sólo lectura**: verdadero
