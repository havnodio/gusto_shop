import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Gusto Club Tunisie was born from a love for authentic Mediterranean flavors and a passion for Tunisian craftsmanship. We believe in simple, high-quality ingredients and time-honored traditions to create taralli that are not just a snack, but an experience.
            </p>
            <p className="text-muted-foreground">
              Our values are simple: Quality, Tradition, and Passion. Every batch is handmade with care, ensuring a delicious, crunchy bite every time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://placehold.co/400x400/e2d8c1/6b705c?text=Production" alt="Taralli production" className="rounded-lg shadow-md" />
            <img src="https://placehold.co/400x400/e2d8c1/6b705c?text=Packaging" alt="Taralli packaging" className="rounded-lg shadow-md mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;