# Plan para renovar tarjetas

La app usa un archivo de pack activo: `content-pack.js`. Cuando queramos renovar contenido, sustituimos ese archivo por un pack nuevo y cambiamos la version de cache en `sw.js`.

## Objetivo recomendado

- 18 temas.
- 50 tarjetas por tema.
- Total activo: 900 tarjetas.
- Cada tarjeta debe funcionar sola: titulo, explicacion, matiz, ejemplo y cierre.
- Longitud objetivo: unas 6-8 lineas en movil.
- Cada renovacion borra el pack anterior del feed e inserta el nuevo.

## Flujo de renovacion

1. Generar un nuevo `content-pack.js`.
2. Cambiar `ACTIVE_PACK_ID` dentro de `content-pack.js`.
3. Subir `content-pack.js` a GitHub.
4. Subir `sw.js` con una nueva version de cache.
5. Abrir la app en Safari y recargar.

## Criterio de calidad

Las tarjetas deben ser correctas, con matiz y menos obvias que datos escolares basicos. Mejor una mini explicacion clara que una frase suelta. Cada tarjeta tiene que poder leerse de forma independiente, aunque pertenezca a una serie de renovacion.
