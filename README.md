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

### Cambios V3

- Hero cinematográfico con efecto de tipeo y parallax.
- Vista relacional "INTERFAZ DEL JUEGO" con nodos clickeables que filtran el catálogo.
- Tabla más compacta y encabezado elevado.
- Política de imágenes más estricta: no se reutilizan criaturas genéricas para representar registros sin imagen; se distingue entre imagen externa verificada, coincidencia nominal y ausencia de imagen.
- Assassin y Assassin Rush quedan visualmente separados y documentados.
