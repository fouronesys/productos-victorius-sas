# Productos Victorius S.A.S.

Sitio corporativo independiente para el portafolio de productos solares de Productos Victorius S.A.S. El logo y las fotografías proceden del material facilitado para el sitio. No incluye pasarela de pagos ni backend.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Para generar la versión estática:

```bash
npm run build
```

La carpeta `dist/` puede alojarse en un servidor de archivos estáticos. El valor por defecto de la ruta base es `/`; si se publica bajo una subruta, por ejemplo `/productos-victorius/`, ejecutar `BASE_PATH=/productos-victorius/ npm run build`.

## Dominio y SEO

No se ha configurado una URL canónica ni un sitemap con dominio absoluto porque aún no se indicó el dominio definitivo. Añadirlos al definir el dominio público. El sitio no utiliza el dominio de Odoo.