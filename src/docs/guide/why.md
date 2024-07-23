# Why?

You may know **lightdm-webkit2-greeter**, a powerful web based greeter for
LightDM. This project doesn't have new updates since 2018 (that's a long time
ago) as the Antergos team, the maintainers, didn't have time to continue the
develop of the Antergos project and subsequently its derived projects like
lightdm-webkit2-greeter were abandoned.

Yet, the greeter works perfectly in some distros like Arch Linux, so why bother?
Basically, at the time I was using Ubuntu, where lightdm-webkit2-greeter doesn't
event manage to launch and I didn't want to install another distro, so... after
a few weeks of trying to install it, I decided to fix it by myself.

Luckily, the project was archived so I could clone it and fix it! And even more
lucky (maybe), when Antergos left they were migrating the project from WebkitGTK
in C to PyQT5 in Python3 with a lot of progress. After some weeks, I managed to
build the project and fix the essential bugs so it could be usable. I added more
features like a brightness and battery controller, layout selector, and more...
so here we are, **web-greeter** became a reality.

After finishing what I wanted to improve and fix about web-greeter, I decided to
create **nody-greeter**, which became the next generation web-greeter with
better performance and maintainability. Then, multi-monitor support was added
along with github-ci builds for Debian, Ubuntu and Void Linux for nody-greeter.
The same was added for web-greeter after some time (except for the Void builds)
with an AUR package for Arch Linux.

Currently, another greeter, **sea-greeter** is in development just for fun.
