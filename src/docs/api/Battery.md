# Battery

Interface for object that holds info about the battery on the system. This
object is not created by the theme's code, but rather by the
[`LightDM.Greeter`](Greeter) class.

## name <ReadOnly />

- Type: `string`

The battery's name.

## level <ReadOnly />

- Type: `string`

The battery level.

## status <ReadOnly />

- Type: `string`

The state for the battery

## ac_status <ReadOnly />

- Type: `boolean`

Whether the AC adapter is connected

## capacity <ReadOnly />

- Type: `number`

The battery total capacity

## time <ReadOnly />

- Type: `string`

The time until discharge

## watt <ReadOnly />

- Type: `boolean`

The battery watts level
