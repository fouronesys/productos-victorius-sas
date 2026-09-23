import { Phone, Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function Footer() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-victorius.png`.replace('//', '/');

  return (
    <footer id="contacto" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <img src={logoUrl} alt="Productos Victorius S.A.S." className="h-24 w-auto self-start object-contain" />
            <p className="text-muted/80 text-sm leading-relaxed max-w-xs">
              Suministro de paneles, kits y otros productos solares desde Bogotá.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/573224038915" 
                target="_blank" 
                rel="noreferrer"
                className="bg-secondary/20 hover:bg-secondary/30 text-secondary p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="mailto:sasvictorius438@gmail.com" 
                className="bg-primary/20 hover:bg-primary/30 text-primary p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navegación</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#inicio" className="text-muted/80 hover:text-secondary transition-colors text-sm">Inicio</a></li>
              <li><a href="#nosotros" className="text-muted/80 hover:text-secondary transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#productos" className="text-muted/80 hover:text-secondary transition-colors text-sm">Nuestros Productos</a></li>
              <li><a href="#marcas" className="text-muted/80 hover:text-secondary transition-colors text-sm">Marcas suministradas</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted/80 text-sm leading-relaxed">
                    Carrera 85C N° 25B-17<br />
                    Piso 2<br />
                    Bogotá, Colombia
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted/60">PBX</span>
                    <a href="tel:+576014966144" className="text-muted/80 hover:text-white transition-colors text-sm">601 496 6144</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted/60">Celular</span>
                    <a href="tel:+573224038915" className="text-muted/80 hover:text-white transition-colors text-sm">322 403 8915</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted/60">Email</span>
                    <a href="mailto:sasvictorius438@gmail.com" className="text-muted/80 hover:text-white transition-colors text-sm">sasvictorius438@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} Productos Victorius S.A.S. NIT 901.447.894-5. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted/60">
            <span>Energía limpia para un futuro brillante.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
