const FeaturedOn = () => {
  const institutions = [
    "LPU",
    "Chandigarh University",
    "Graphic Era Hill University",
    "CGC Jhanjeri",
    "IEEE",
    "NAAC",
    "NIRF",
    "QS",
    "NBA",
  ];

  return (
    <section className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-foreground inline-block relative">
            Featured On
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform translate-y-2"></span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {institutions.map((name) => (
            <div
              key={name}
              className="text-2xl md:text-3xl font-bold text-foreground/80 hover:text-foreground transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
