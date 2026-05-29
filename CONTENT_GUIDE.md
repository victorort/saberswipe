# Plan para tener muchas tarjetas

La app ya puede manejar muchas tarjetas porque el feed carga contenido por tandas. Para llegar a 100+ tarjetas por tema, lo mejor es trabajar por lotes.

## Objetivo recomendado

- 18 temas iniciales.
- 100 tarjetas por tema.
- Total: 1.800 tarjetas.
- Tamano ideal por tarjeta: titulo corto, explicacion de 2-3 frases y una idea extra.

## Formato de cada tarjeta

```js
{
  id: "ciencia-101",
  category: "Ciencia",
  title: "Titulo claro",
  body: "Explicacion breve, correcta y facil de leer.",
  extra: "Idea para recordar."
}
```

## Flujo practico

1. Elegir un tema, por ejemplo `Ciencia`.
2. Crear 25 tarjetas.
3. Revisarlas para evitar errores o repeticiones.
4. Subirlas a GitHub y probar en iPhone.
5. Repetir hasta llegar a 100 por tema.

## Prioridad de calidad

Para que SaberSwipe sea util de verdad, conviene que cada tarjeta sea:

- Corta.
- Correcta.
- Comprensible sin contexto previo.
- No repetida.
- Con una idea memorable.

Es mejor cargar 25 buenas tarjetas por tanda que meter 1.000 de golpe sin revisar.
