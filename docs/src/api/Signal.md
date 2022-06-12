---
title: Signal
---

# {{ $frontmatter.title }}
Interface for signals connected to LightDM itself. This is not created by the theme's code, but rather by Web Greeter.
When Web Greeter triggers the signal, all calbacks are executed.

## connect(callback)
Connects a callback to the signal.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>The callback to attach.</p>
</td>
    </tr>  </tbody>
</table>

## disconnect(callback)
Disconnects a callback to the signal.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>The callback to disattach.</p>
</td>
    </tr>  </tbody>
</table>

