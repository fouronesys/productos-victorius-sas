import { Leaf, ShieldCheck, Zap } from 'lucide-react';

export function About() {
  const panelImage = `${import.meta.env.BASE_URL}images/paneles-inventario.webp`.replace('//', '/');
  
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Calidad Garantizada",
      description: "Contamos con referencias de fabricantes reconocidos para diferentes necesidades solares."
    },
    {
      icon: <Leaf className="h-6 w-6 text-secondary" />,
      title: "Compromiso Ambiental",
      description: "Promovemos activamente la transición energética en Colombia mediante soluciones limpias y accesibles."
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Soluciones Independientes",
      description: "Conozca opciones de kits y equipos para aplicaciones solares residenciales y comerciales."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-[3rem] -z-10 transform -rotate-3"></div>
            <img 
              src={panelImage} 
              alt="Inventario de paneles solares en bodega" 
              className="rounded-3xl shadow-lg w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
              loading="lazy"
            />
            
            <div className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 bg-foreground text-background p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold text-accent mb-2">Bogotá</p>
              <p className="text-sm text-muted/80">Encuéntrenos en la capital.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <p className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Sobre nosotros</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                Empoderando tu futuro con <span className="text-secondary">energía solar confiable</span>.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              En <strong className="text-foreground">Productos Victorius S.A.S.</strong>, suministramos equipos y soluciones solares desde Bogotá para diferentes necesidades.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed text-balance">
              Nuestro objetivo es facilitar el acceso a productos de energía solar, con opciones para proyectos residenciales y comerciales.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 mt-2 border-t border-border">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1 bg-muted p-2.5 rounded-lg h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
