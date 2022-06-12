---
title: GreeterComm
---

# {{ $frontmatter.title }}
Provides a cross-window communication system, useful for
multi-monitor setups. The instance can be accessed with the global
variable: `greeter_comm`

## greeter_comm.window_metadata : <code>WindowMetadata</code>
Holds the current window metadata, such as size, position and whether it's in the primary screen.

<table>
  <thead>
    <tr>
      <th>Name</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
  <td>id</td><td><code>string</code></td><td>Window id</td>
</tr>
<tr>
  <td>is_primary</td><td><code>boolean</code></td><td>Whether the window is inside the primary screen or not</td>
</tr>
<tr>
  <td>position</td><td><code>Object</code></td><td>Window position in screen</td>
</tr>
<tr>
  <td>position.x</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>position.y</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>size</td><td><code>Object</code></td><td>Window size</td>
</tr>
<tr>
  <td>size.width</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>size.height</td><td><code>number</code></td><td></td>
</tr>
<tr>
  <td>overallBoundary</td><td><code>Object</code></td><td>The total real-state across all screens, this can be used to assist in, for example, correctly positioning multi-monitor backgrounds</td>
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
Send a message to all windows currently open for the greeter.
Receive the message through ["GreeterBroadcastEvent"](window.html#greeterbroadcastevent).

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td><td><code>unknown</code></td><td><code>undefined</code></td><td>Custom data to send</td>
</tr>
  </tbody>
</table>
