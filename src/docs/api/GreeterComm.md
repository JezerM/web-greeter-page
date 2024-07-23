# GreeterComm

Provides a cross-window communication system, useful for multi-monitor setups.
The instance can be accessed with the global variable: `greeter_comm`

## greeter_comm.window_metadata

- Type: [`WindowMetadata`](WindowMetadata)

Holds the current window metadata, such as size, position and whether it's in
the primary screen.

## greeter_comm.broadcast(data)

Send a message to all windows currently open for the greeter. Receive the
message through ["GreeterBroadcastEvent"](window#greeterbroadcastevent).

| Param |   Type    | Description         |
| :---: | :-------: | :------------------ |
| data  | `unknown` | Custom data to send |
