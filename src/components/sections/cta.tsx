import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';

export function CallToAction() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ background: 'linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 100%)' }}></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            ¿Listo para dar el salto a la <span className="text-accent">energía limpia</span>?
          </h2>
          <p className="text-muted/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Contáctenos hoy mismo para recibir asesoría personalizada y cotizar los equipos que su proyecto necesita.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Button size="lg" asChild className="rounded-full px-8 h-14 text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
              <a href="https://wa.me/573224038915" target="_blank" rel="noreferrer">
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base border-white/20 bg-transparent hover:bg-white/10 text-white w-full sm:w-auto">
              <a href="mailto:sasvictorius438@gmail.com">
                Solicitar cotización por correo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
