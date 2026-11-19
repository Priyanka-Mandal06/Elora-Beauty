import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 md:py-16"
    >
      {/* Hero text and call-to-action. */}
      <div className="order-2 space-y-7 md:order-1">
        <p className="text-xs font-medium tracking-[0.3em] text-[#B77C78]">
          THE ART OF EVERYDAY GLOW
        </p>

        <h1 className="max-w-xl font-serif text-5xl leading-[1.15] text-[#352B29] md:text-7xl">
          Beauty begins
          <br />
          <span className="italic text-[#B77C78]">with you.</span>
        </h1>

        <p className="max-w-md text-sm leading-7 text-[#756964] md:text-base">
          Discover thoughtfully crafted beauty essentials that celebrate your natural glow. Because
          your skin deserves a little extra love.
        </p>

        <a
          href="#products"
          className="group inline-flex items-center gap-4 bg-[#352B29] px-8 py-4 text-xs tracking-[0.15em] text-white transition hover:bg-[#B77C78]"
        >
          EXPLORE COLLECTION
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Brand highlights. */}
        <div className="flex items-center gap-8 pt-5">
          <div>
            <p className="font-serif text-2xl">100%</p>
            <p className="mt-1 text-[10px] tracking-widest text-gray-500">SKIN LOVING</p>
          </div>

          <div className="h-10 w-px bg-[#D8C9C2]" />

          <div>
            <p className="font-serif text-2xl">Pure</p>
            <p className="mt-1 text-[10px] tracking-widest text-gray-500">EVERYDAY BEAUTY</p>
          </div>
        </div>
      </div>

      {/* Hero image and promotional overlay. */}
      <div className="relative order-1 md:order-2">
        <div className="absolute -right-3 -top-3 h-full w-full border border-[#D8BDB4]" />

        <img
          src="https://images.unsplash.com/photo-1777840347880-747242e0db00?auto=format&fit=crop&w=1200&q=85"
          alt="Premium skincare products"
          className="relative h-[380px] w-full object-cover md:h-[520px]"
        />

        <div className="absolute bottom-5 left-5 bg-[#FAF7F2]/90 px-5 py-4 backdrop-blur-sm">
          <p className="font-serif text-lg italic">A little ritual,</p>
          <p className="text-xs tracking-wider text-[#756964]">A lot of self-love.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
