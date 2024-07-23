# Signal

Interface for signals connected to LightDM itself. This is not created by the
theme's code, but rather by Web Greeter. When Web Greeter triggers the signal,
all calbacks are executed.

## connect(callback)

Connects a callback to the signal.

|  Param   |    Type    | Description            |
| :------: | :--------: | :--------------------- |
| callback | `function` | The callback to attach |

## disconnect(callback)

Disconnects a callback to the signal.

|  Param   |    Type    | Description             |
| :------: | :--------: | :---------------------- |
| callback | `function` | The callback to dettach |
