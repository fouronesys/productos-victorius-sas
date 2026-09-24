# Productos Victorius S.A.S.

Sitio corporativo independiente para el portafolio de productos solares y opciones para redes eléctricas de Productos Victorius S.A.S. El logo y las fotografías originales proceden del material facilitado para el sitio; la fotografía de la red de distribución es ilustrativa y su fuente figura en `PHOTO-CREDITS.md`. No incluye pasarela de pagos ni backend.

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

## Despliegue en CapRover

El repositorio incluye `captain-definition`, un `Dockerfile` de dos etapas y la configuración de Nginx para servir el sitio estático. **No necesita base de datos ni variables secretas.**

1. Cree una aplicación nueva en CapRover y establezca **Container HTTP Port: 80**.
2. En la sección de despliegue, configure el repositorio GitHub y la rama `main`. Como el repositorio es privado, autorice su lectura en CapRover mediante su método de acceso a repositorios privados. El archivo `captain-definition` de la raíz usará el `Dockerfile` automáticamente.
3. Configure el dominio en CapRover, active HTTPS y, cuando funcione, active Force HTTPS.
4. Si prefiere cargar un archivo en vez de conectar GitHub, empaquete la **raíz de este repositorio** con `captain-definition`, `Dockerfile`, `package.json`, `src/` y `public/`.

El contenedor entrega el sitio desde `/`, admite recargar las rutas de la aplicación y comprueba que Nginx responde en el puerto 80. `BASE_PATH` es `/` por defecto en CapRover; no use la ruta `/productos-victorius/` de la previsualización de Replit como dominio público.

## Dominio y SEO

La página incluye título, descripción, encabezados semánticos, textos alternativos, datos estructurados de la empresa, imagen para compartir y el logo como favicon PNG/ICO e icono móvil. No se ha inventado un dominio definitivo ni se utiliza el dominio de Odoo.

Cuando conozca la URL pública definitiva, configúrela **en la compilación**, no como variable del contenedor ya iniciado: por ejemplo `SITE_URL=https://su-dominio.com/ npm run build`. Así se generarán `sitemap.xml`, la URL canónica, enlaces de imagen social y la referencia al sitemap en `robots.txt`. En CapRover, establezca el valor por defecto del `ARG SITE_URL=` en el `Dockerfile` antes de volver a desplegar, o suministre `SITE_URL` como argumento de compilación si su flujo de despliegue lo permite. Use una URL HTTPS que termine en `/`. No hace falta definir `SITE_URL` para que el sitio funcione.