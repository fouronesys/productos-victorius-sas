import { Button } from '@/components/ui/button';
import { ArrowRight, Sun } from 'lucide-react';

export function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}images/kit-solar-comercial.webp`.replace('//', '/');

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 pb-12 md:pb-10 overflow-hidden bg-muted/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary w-fit text-sm font-medium border border-secondary/20">
              <Sun className="h-4 w-4" />
              <span>Energía solar para el futuro</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
              Impulsando a Colombia con <span className="text-primary">Energía Renovable</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-balance">
              Suministramos paneles, kits, iluminación y calentadores solares.
              Explore opciones para proyectos residenciales y comerciales.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <a href="#productos">
                  Explorar productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base border-border bg-white hover:bg-muted transition-all">
                <a href="https://wa.me/573224038915" target="_blank" rel="noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-8 mt-4 border-t border-border">
              <Sun className="h-6 w-6 text-accent shrink-0" />
              <span className="text-sm font-medium text-muted-foreground">Atención desde Bogotá, Colombia</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
              <img 
                src={heroImage} 
                alt="Kit solar comercial con paneles y accesorios"
                width={747}
                height={902}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating badge */}
            <div className="relative mt-4 w-fit max-w-full md:absolute md:mt-0 md:-bottom-6 md:-left-12 glass p-4 rounded-2xl shadow-xl animate-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Sun className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Soluciones solares</p>
                  <p className="text-xs text-muted-foreground">Consulte nuestro portafolio</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
