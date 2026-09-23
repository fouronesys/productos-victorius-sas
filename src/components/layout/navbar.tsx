import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = `${import.meta.env.BASE_URL}logo-victorius.png`.replace('//', '/');

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#productos', label: 'Productos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <img src={logoUrl} alt="Productos Victorius S.A.S." className="h-12 md:h-16 w-auto object-contain transition-all" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l pl-6 border-border">
              <a href="tel:+573224038915" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span className="hidden lg:inline">322 403 8915</span>
              </a>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <a href="https://wa.me/573224038915" target="_blank" rel="noreferrer">
                  Cotizar ahora
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
             aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <nav className="flex flex-col items-center gap-6 w-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors w-full text-center py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col items-center gap-4 w-full pt-8 border-t border-border">
            <a href="tel:+573224038915" className="flex items-center gap-3 text-lg font-medium">
              <Phone className="h-5 w-5 text-primary" />
              322 403 8915
            </a>
            <a href="mailto:sasvictorius438@gmail.com" className="flex items-center gap-3 text-lg font-medium">
              <Mail className="h-5 w-5 text-primary" />
              Enviar correo
            </a>
            <Button asChild size="lg" className="w-full max-w-[250px] mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <a href="https://wa.me/573224038915" target="_blank" rel="noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
