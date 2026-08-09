# Procedencia de datos

- `catalog.json`, `weapons.json`, `creatures.json`, `regions.json`, `magic.json`, `ui-resources.json`, `memory.json`, `files.json`: derivados del Excel aportado por el usuario.
- `community.json`: enriquecimiento editorial de fuentes públicas; no sustituye la evidencia local.
- `research-sources.json`: URLs de referencia pública.

La UI utiliza el campo de confianza/estado del Excel para distinguir extracción local de correlaciones.

## Capa visual externa

`src/data/external-assets.json` contiene únicamente asociaciones visuales externas y sus páginas fuente. Esta capa no modifica hashes, offsets, IDs, CDefs ni la confianza técnica del catálogo base. Para registros sin correspondencia visual demostrable, la interfaz usa una imagen contextual de categoría en lugar de inventar una asociación exacta.

## V3 — política visual y esquema relacional

- El esquema "INTERFAZ DEL JUEGO" usa relaciones sólidas únicamente para asociaciones representadas por la clasificación técnica del catálogo (OBJECT, CREATURE, REGION y sus tipos/CDefs asociados). Las líneas punteadas son agrupaciones de navegación y no afirman punteros de memoria.
- Para `CREATURE_ASSASSIN` y variantes de quest se usa la ficha **Assassin** de The Fable Wiki y el archivo visual `File:Assassin.jpg`, listado en la categoría de imágenes de personajes de Fable.
- `Assassin Rush` se mantiene separado del enemigo Assassin y usa su recurso visual de hechizo cuando corresponde. La categoría de imágenes de hechizos lista `File:ASSASSIN RUSH.png`.
- En registros sin una imagen específica respaldada, la interfaz muestra "SIN IMAGEN VERIFICADA" en lugar de reutilizar una imagen genérica de otra entidad.
- Para entidades/objetos con nombre legible se puede intentar una coincidencia nominal exacta de archivo en Fable Wiki; la UI la marca como **coincidencia nominal**, no como imagen verificada, salvo que exista una entrada explícita en `external-assets.json`.
