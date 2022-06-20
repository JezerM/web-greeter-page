# ¿Por qué?

Quizá conozcas el programa **lightdm-webkit2-greeter**, un portente greeter basado en web para LightDM. Este proyecto no tiene nuevas actualizaciones desde 2018 (ya hace mucho tiempo) debido a que el grupo Antergos, sus desarrolladores, no tuvieron el tiempo para continuar con el proyecto Antergos y, consecuentemente, sus derivados proyectos como lightdm-webkit2-greeter, así, con el pasar del tiempo, fueron abandonados.

Aún así, el greeter funciona perfectamente en algunas distribuciones Linux como Arch, así que ¿para qué molestarse? Pues, en ese entonces la distribución que usaba era Ubuntu, donde lightdm-webkit2-greeter ni siquiera puede ser ejecutado, y no quería instalar otra distro... así que, luego de unas cuantas semanas de intentar instalarlo y ver que no funcionaba, decidí arreglarlo por mi cuenta.

Por suerte el proyecto fue archivado, por lo que tan sólo sería clonarlo, arreglarlo y ¡Listo! E incluso más afortunado (ya no lo creo), cuando el grupo Antergos desapareció el proyecto de lightdm-webkit2-greeter estaba siendo migrado de WebkitGTK en C a PyQt5 en Python3 con mucho progreso por detrás. Siendo hecho en Python y con un gran trabajo por detrás, fue relativamente fácil hacer que funcione. Luego de unas semanas, fui capaz de arreglar los errores esenciales para que sea usable, por lo menos. Con el tiempo añadí más características como un controlador de brillo y batería, un selector de fuentes de entrada y más~ Así que aqui estamos, **web-greeter** se convirtió en realidad.

Luego de finalizar con lo que más quería de web-greeter, decidí crear **nody-greeter** por mero capricho. Este se convirtió en lo que llamaría la próxima generación de web-greeter, con un mejor rendimiento y facilidad de mantenimiento. Luego de un tiempo, se añadió el soporte para pantallas múltiples junto a acciones y workflows de CI de GitHub para Debian, Ubuntu y Void Linux para nody-greeter. Lo mismo se añadió al poco tiempo, a excepción de los builds de Void Linux, además de un paquete AUR para Arch Linux.

En la actualidad, otro greeter está en desarrollo sólo por diversión: **sea-greeter**.
