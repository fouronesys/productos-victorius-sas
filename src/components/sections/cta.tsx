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
        <div className="max-w-5xl mx-auto mt-8 rounded-3xl border border-primary/15 bg-blue-50/70 p-8 md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Opciones de financiación</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Consulte por Addi y Sistecrédito</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">Pregunte por las opciones de financiación al cotizar. La disponibilidad y aprobación están sujetas a las condiciones de cada entidad.</p>
              <a
                href={`https://wa.me/573224038915?text=${encodeURIComponent('Hola, quisiera consultar opciones de financiación con Addi o Sistecrédito para una solución solar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-5 font-semibold text-primary hover:underline"
              >
                Consultar opciones por WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-3" aria-label="Entidades de financiación">
              <div className="w-44 h-24 p-5 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}images/addi-logo.png`} alt="Addi" loading="lazy" className="w-full max-h-14 object-contain" />
              </div>
              <div className="w-44 h-24 p-4 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}images/sistecredito-logo.png`} alt="Sistecrédito" loading="lazy" className="w-full max-h-14 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
