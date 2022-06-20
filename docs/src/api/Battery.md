# Battery

Interface for object that holds info about the battery on the system. This object is not created by the theme's code, but rather by the [`LightDM.Greeter`](Greeter.html) class.

## name : <code>string</code>
The battery's name.

**Read only**: true

## level : <code>string</code>
The battery level.

**Read only**: true

## status : <code>string</code>
The state for the battery

**Read only**: true

## ac\_status : <code>boolean</code>
Whether the AC adapter is connected

**Read only**: true

## capacity : <code>number</code>
The battery total capacity

**Read only**: true

## time : <code>string</code>
The time until discharge

**Read only**: true

## watt : <code>boolean</code>
The battery watts level

**Read only**: true
