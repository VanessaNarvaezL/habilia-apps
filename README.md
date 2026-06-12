# HABIL/IA Studio

**Graba mejor desde el inicio.**

HABIL/IA Studio es una aplicación web para preparar y grabar contenido educativo y profesional antes de editarlo en CapCut u otra plataforma. Combina guion, teleprompter, formato correcto y descarga de video y audio en un solo flujo simple, pensado para personas no técnicas.

Una herramienta de [HABIL/IA](https://habilia-apps.vercel.app) — *Humanos primero. Inteligencia después.*

---

## El problema que resuelve

La mayoría de las herramientas se concentran en la edición. Pero el mayor problema de quien crea contenido educativo ocurre **antes**: grabar sin guion, en el formato equivocado, en tomas largas imposibles de editar, y con archivos desordenados.

HABIL/IA Studio resuelve esa etapa previa. Ayuda a grabar explicaciones, cursos, tutoriales y cápsulas profesionales con orden, claridad y seguridad — y entrega archivos listos para pasar al editor.

HABIL/IA Studio **no es un editor de video**. No tiene stickers, música, transiciones ni timeline. Termina exactamente donde empieza CapCut: con buen material base.

## Para quién es

- Educadores y profesores
- Creadores de cursos online
- Terapeutas y coaches
- Emprendedores y negocios locales
- Equipos que producen contenido de forma regular
- Usuarios del ecosistema HABIL/IA, NLConsultorIA y E/SESLAB

## Modos disponibles

**Video.** Grábate explicando frente a cámara con el guion avanzando en pantalla. Formato vertical (9:16) u horizontal (16:9), filtros simples y descarga de video y audio por separado.

**Solo Audio.** Narra con el guion en pantalla, sin cámara. Incluye medidor de nivel de micrófono para confirmar que la voz se está captando. Ideal para voz sobre láminas, imágenes o video.

**Por Bloques.** Divide una clase o curso en partes (Introducción, Concepto principal, Ejemplo, Cierre, Llamado a la acción — plantilla editable) y graba cada una por separado. Los archivos se descargan numerados y en orden (`01-introduccion`, `02-concepto-principal`, …), listos para unir en el editor. Incluye descarga del guion completo en `.txt`.

## Funciones principales

- Teleprompter con velocidad y tamaño de texto ajustables, línea de lectura y pausa con un toque
- Grabación con cámara y micrófono, con selector de dispositivos y cambio de cámara frontal/trasera
- Formato garantizado: vertical 9:16 u horizontal 16:9
- Cuenta regresiva antes de grabar
- Descarga de video y descarga del audio por separado, con nombre de archivo personalizable
- Guiones guardados en el dispositivo, reutilizables entre sesiones
- Carga de guion desde archivo `.txt` o `.md` 
- Filtros simples (Natural, Cálido, Profesional, Contraste suave) con ajustes finos de brillo, contraste y saturación
- Pausa y reanudación de grabación en los navegadores que lo permiten
- Avisos honestos: la app informa el formato real obtenido y desactiva o advierte lo que el navegador no soporta

## Privacidad

**Las grabaciones nunca salen del dispositivo del usuario.** Todo el procesamiento — cámara, grabación, filtros, descarga — ocurre localmente en el navegador. En esta versión no existe subida de archivos a ningún servidor. Los guiones guardados también se almacenan solo en el dispositivo.

## Limitaciones honestas de esta versión

- **El formato final depende del navegador.** Safari (iPhone/Mac) suele entregar MP4/M4A; Chrome en Android y computador suele entregar WebM. La app informa qué formato se obtuvo en cada grabación.
- La conversión universal a MP4 queda para una versión futura (Convertidor HABIL/IA).
- No convierte videos ya grabados o subidos.
- No genera subtítulos automáticos todavía.
- Los filtros quedan grabados en el video solo en navegadores que lo soportan; donde no, la app lo advierte claramente en vez de simularlo.
- No es un editor tipo CapCut, y no pretende serlo.

## Cómo se usa

1. Abrir la app en el navegador (Chrome o Safari actualizados).
2. Elegir un modo: Video, Solo Audio o Por Bloques.
3. Escribir o pegar el guion.
4. Configurar cámara, micrófono, formato y filtro.
5. Grabar con el teleprompter en pantalla.
6. Revisar la toma.
7. Descargar el video y, si se necesita, el audio por separado.

En el modo Por Bloques se recomienda descargar cada bloque apenas se aprueba, para no acumular grabaciones en la memoria del dispositivo.

## Tecnología

Un solo archivo HTML, sin librerías externas ni dependencias. Construido sobre APIs nativas del navegador (getUserMedia, MediaRecorder, Canvas, FileReader, localStorage). Diseño claro editorial, mobile-first.

## Versiones y roadmap

| Versión | Estado | Contenido |
|---------|--------|-----------|
| v1.0 | Publicada | MVP: tres modos, teleprompter, grabación, descargas |
| v1.1 | Publicada — MVP funcional aprobado | Rediseño claro editorial premium |
| v1.2 |  Carga de guion desde archivo `.txt` / `.md` |

**Próximos pasos (sin orden comprometido):**

- Descarga de todos los bloques en un solo ZIP
- Convertidor HABIL/IA: conversión de WebM a MP4 y otros formatos
- Subtítulos automáticos
- Exportación MP4 Pro garantizada en todos los dispositivos
- Carga de PDF/Word como guion
- Integración futura con HABIL/IA Edu

## Nota de marca

HABIL/IA Studio no reemplaza la edición profesional. Resuelve la etapa anterior: grabar con más orden, claridad y seguridad. Como todo en HABIL/IA, la tecnología está al servicio de la persona — no al revés.

---

© HABIL/IA · Hecho en Chile
