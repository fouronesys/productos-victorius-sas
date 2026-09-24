import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Products() {
  const categories = [
    {
      id: "paneles",
      title: "Paneles Solares",
      description: "Módulos fotovoltaicos de alta eficiencia para proyectos residenciales e industriales.",
      image: "paneles-transporte.webp",
      width: 1080,
      height: 606,
      color: "bg-blue-50 text-primary border-primary/20",
      tag: "Alta Demanda"
    },
    {
      id: "kits",
      title: "Kits Solares",
      description: "Sistemas completos (5kW, híbridos y comerciales) listos para instalación.",
      image: "kit-solar-5kw.webp",
      width: 699,
      height: 865,
      color: "bg-green-50 text-secondary border-secondary/20",
      tag: "Solución Integral"
    },
    {
      id: "alumbrado",
      title: "Iluminación Solar",
      description: "Alumbrado público, luces de muro y accesorios portátiles con panel integrado.",
      image: "alumbrado-solar.webp",
      width: 852,
      height: 852,
      color: "bg-orange-50 text-accent border-accent/20",
      tag: "Sin Cableado"
    },
    {
      id: "calentadores",
      title: "Calentadores Solares",
      description: "Alternativas solares para el calentamiento de agua en diferentes espacios.",
      image: "calentador-instalado.webp",
      width: 820,
      height: 651,
      color: "bg-slate-50 text-slate-600 border-slate-200",
      tag: "Ahorro Térmico"
    },
    {
      id: "redes-electricas",
      title: "Redes Eléctricas",
      description: "Opciones para redes eléctricas y distribución de energía. Consulte los componentes disponibles para su proyecto.",
      image: "redes-electricas.webp",
      width: 1200,
      height: 800,
      color: "bg-blue-50 text-primary border-primary/20",
      tag: "Distribución"
    }
  ];

  const getImageUrl = (img: string) => `${import.meta.env.BASE_URL}images/${img}`.replace('//', '/');

  return (
    <section id="productos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Nuestro catálogo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Soluciones solares y redes eléctricas
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full bg-white">
            <a href="https://wa.me/573224038915" target="_blank" rel="noreferrer">
              Solicitar catálogo completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all hover:shadow-lg bg-white">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={getImageUrl(category.image)} 
                  alt={category.title}
                  width={category.width}
                  height={category.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${category.color}`}>
                  {category.tag}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {category.description}
                </p>
                <a 
                  href={`https://wa.me/573224038915?text=${encodeURIComponent(`Hola, me interesa información sobre ${category.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Cotizar ahora
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/50 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Infraestructura eléctrica</p>
            <h3 id="redes-electricas-title" className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
              Redes eléctricas y distribución de energía
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Conozca opciones relacionadas con redes de distribución, canalización e infraestructura eléctrica.
              Escríbanos para consultar los componentes disponibles y las necesidades de su proyecto.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { image: 'redes-electricas.webp', alt: 'Red aérea de distribución eléctrica con transformadores', label: 'Redes de distribución', width: 1200, height: 800 },
              { image: 'canalizacion-electrica.webp', alt: 'Canalización y conexiones para infraestructura eléctrica', label: 'Canalización eléctrica', width: 1070, height: 1080 },
            ].map((photo) => (
              <figure key={photo.image} className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={getImageUrl(photo.image)}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="h-56 w-full object-cover md:h-72"
                />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {photo.label} · Fotografía de referencia
                </figcaption>
              </figure>
            ))}
          </div>
          <a
            href={`https://wa.me/573224038915?text=${encodeURIComponent('Hola, quisiera información sobre redes eléctricas')}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center font-semibold text-primary hover:text-primary/80"
          >
            Consultar sobre redes eléctricas <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Highlighted Gallery */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Más de nuestras soluciones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: 'luces-solares-muro.webp', description: 'Luminaria solar de pared', width: 502, height: 524 },
              { image: 'accesorios-iluminacion.webp', description: 'Accesorios de iluminación solar', width: 1080, height: 1127 },
              { image: 'kit-solar-hibrido.webp', description: 'Kit de energía solar híbrido', width: 742, height: 799 },
              { image: 'calentador-exhibicion.webp', description: 'Calentador solar exhibido', width: 764, height: 1400 },
            ].map(({ image, description, width, height }) => (
              <div key={image} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
                <img 
                  src={getImageUrl(image)} 
                  alt={description}
                  width={width}
                  height={height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
