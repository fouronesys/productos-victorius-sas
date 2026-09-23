export function Brands() {
  const brands = [
    "LONGi Solar",
    "Jinko Solar",
    "Trina Solar",
    "JA Solar",
    "Canadian Solar"
  ];

  return (
    <section id="marcas" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Marcas de Confianza Global
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-12">
          Dentro de las marcas de paneles que suministramos se encuentran:
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="text-xl md:text-3xl font-bold tracking-tight text-white/90 hover:text-white transition-colors cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
