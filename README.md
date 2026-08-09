# Fable TLC Atlas

Sitio estático profesional en **Astro + Tailwind CSS** generado a partir de `FableTLC_EgoMP_MegaCatalogo.xlsx`.

## Incluye

- 13,161 registros técnicos del catálogo local.
- 155 armas con IDs correlacionados, 513 entidades, 112 mapas/regiones y 19 entradas de magia.
- Buscador global por nombre, internal name, ID, hexadecimal, hash, CDef, propiedades y fuente.
- Filtros por categoría y paginación.
- Modal de detalle por registro.
- Exportación del resultado actual a **CSV, JSON, TSV, NDJSON, XML y YAML** directamente desde el navegador.
- Fichas editoriales enriquecidas con enlaces públicos.
- Imágenes externas por URL: no se guardan assets del juego dentro del repositorio.
- Diseño responsive, animaciones, glass UI y estética inspirada en un archivo arcano/técnico de Albion.

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

El proyecto usa `BASE_PATH`. Para un repositorio llamado `fable-tlc-atlas`:

```bash
BASE_PATH=/fable-tlc-atlas/ npm run build
```

Publicá el contenido de `dist/` mediante GitHub Pages o GitHub Actions.

## Datos y copyright

El repositorio contiene datos técnicos y enlaces a recursos externos. Las imágenes remotas siguen perteneciendo a sus respectivos titulares/hosts. Que una imagen esté accesible en Internet no la vuelve automáticamente libre de copyright; antes de publicar un proyecto público conviene revisar las condiciones del sitio de origen y reemplazar imágenes sin licencia clara por material propio, permitido o con atribución/licencia compatible.

La capa `community.json` está separada de `catalog.json` para no presentar información de wiki/foro como extracción local verificada.

## Cambios de la revisión visual + búsqueda

- Se eliminó el header/navegación superior redundante.
- El hero ahora usa `FABLE TLC ATLAS` como título y `Explorá el ADN de Albion` como subtítulo.
- El índice de búsqueda normaliza mayúsculas/minúsculas, acentos, separadores y prefijos hexadecimales. Por ejemplo, `0x2C578DD5`, `2C578DD5` y `2c57-8dd5` resuelven al mismo hash cuando existe.
- Cada fila incorpora una miniatura como primer campo.
- Las miniaturas marcadas con punto verde poseen una correspondencia externa específica documentada en `src/data/external-assets.json`.
- Cuando no existe una imagen pública fiable para un nombre interno, se muestra una imagen contextual de su categoría. No se afirma que sea el modelo exacto.
- Se agregó The Models Resource como fuente visual para los assets de TLC publicados allí.
- Se ampliaron animaciones de entrada, hover de filas, miniaturas y modal de detalle, respetando `prefers-reduced-motion`.

### Política de integridad de datos

El catálogo técnico original no se sobrescribe con datos de lore o imágenes. Los datos externos se resuelven en una capa independiente y siempre conservan su URL de procedencia. Una coincidencia visual no convierte por sí sola un nombre interno en un `Def_ID` validado.

### Cambios V3

- Hero cinematográfico con efecto de tipeo y parallax.
- Vista relacional "INTERFAZ DEL JUEGO" con nodos clickeables que filtran el catálogo.
- Tabla más compacta y encabezado elevado.
- Política de imágenes más estricta: no se reutilizan criaturas genéricas para representar registros sin imagen; se distingue entre imagen externa verificada, coincidencia nominal y ausencia de imagen.
- Assassin y Assassin Rush quedan visualmente separados y documentados.

## GitHub Pages

Este repositorio incluye `.github/workflows/deploy.yml` para publicar automáticamente en GitHub Pages.

1. Subí estos cambios a la rama `main`.
2. En GitHub abrí **Settings → Pages**.
3. En **Build and deployment → Source** elegí **GitHub Actions**.
4. Cada `push` a `main` ejecutará `npm ci`, `npm run build` y publicará `dist/`.

La configuración de Astro usa `site: https://xXKuroiKenshiXx.github.io` y durante GitHub Actions aplica `base: /FableTLC-Atlas`, evitando que CSS/JS y rutas se rompan al servir el proyecto como subdirectorio.

### Política visual

Las imágenes externas están indexadas en `src/data/external-assets.json`. Se diferencian imágenes específicas y representativas verificadas. Si no hay una asociación suficientemente respaldada, el atlas muestra un placeholder en vez de reutilizar una imagen genérica engañosa.
