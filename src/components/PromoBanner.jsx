import { ArrowRight } from 'lucide-react';

function PromoBanner() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#EBD8D2] px-5 py-20 md:px-10 md:py-28"
    >
      {/* Promotional content. */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#A66E69]">A LITTLE LOVE FOR YOUR SKIN</p>

        <h2 className="font-serif text-4xl leading-tight text-[#352B29] md:text-6xl">
          Your glow deserves
          <br />
          <span className="italic text-[#B77C78]">something special.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#756964]">
          Discover your new beauty favourites and enjoy special savings on selected skincare
          essentials.
        </p>

        {/* Link to the product collection. */}
        <a
          href="#products"
          className="group mt-8 inline-flex items-center gap-3 bg-[#352B29] px-8 py-4 text-xs tracking-[0.15em] text-white transition hover:bg-[#B77C78]"
        >
          SHOP THE COLLECTION
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Decorative background circles. */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#B77C78]/20" />

      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full border border-[#B77C78]/20" />
    </section>
  );
}

export default PromoBanner;
