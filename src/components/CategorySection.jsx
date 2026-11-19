const categories = [
  {
    name: 'Skincare',
    subtitle: 'Nourish your natural glow',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&q=85',
  },
  {
    name: 'Makeup',
    subtitle: 'Express your beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&q=85',
  },
  {
    name: 'Haircare',
    subtitle: 'Love every strand',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=700&q=85',
  },
  {
    name: 'Bodycare',
    subtitle: 'Everyday self-care',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700&q=85',
  },
];

function CategorySection() {
  return (
    <section id="categories" className="bg-white px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Category section heading. */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#B77C78]">FIND YOUR FAVOURITES</p>

          <h2 className="font-serif text-4xl text-[#352B29] md:text-5xl">Shop by Category</h2>

          <p className="mt-4 text-sm text-[#756964]">
            Everything you need for your everyday beauty ritual.
          </p>
        </div>

        {/* Display categories in a responsive grid. */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category) => (
            <a href="#products" key={category.name} className="group block">
              <div className="overflow-hidden bg-[#FAF7F2]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80"
                />
              </div>

              <div className="pt-4">
                <h3 className="font-serif text-xl text-[#352B29]">{category.name}</h3>

                <p className="mt-1 text-xs text-[#756964]">{category.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
