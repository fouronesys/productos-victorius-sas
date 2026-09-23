import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Products } from '@/components/sections/products';
import { Brands } from '@/components/sections/brands';
import { CallToAction } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Brands />
      <About />
      <Products />
      <CallToAction />
    </div>
  );
}
