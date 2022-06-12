---
title: Session
---

# {{ $frontmatter.title }}
Interface for object that holds info about a session. Session objects are not
created by the theme's code, but rather by the [`LightDM.Greeter`](Greeter) class.

## name : <code>string</code>
The name for the session.

**Read only**: true

## key : <code>string</code>
The key for the session.

**Read only**: true

## comment : <code>string</code>
The comment for the session.

**Read only**: true

## type : <code>string</code>
The session type (X11 or Wayland)

**Read only**: true
