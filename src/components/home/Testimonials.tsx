import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialCard = ({ image, name, role, text }: { image: string, name: string, role: string, text: string }) => (
  <Card className="p-6">
    <CardContent className="p-0">
      <div className="flex items-center mb-4">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">"{text}"</p>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            image="https://github.com/shadcn.png"
            name="Alice Dupont"
            role="Restaurant Owner"
            text="Gusto Club's taralli are a huge hit with my customers. The quality and authenticity are unmatched. A perfect aperitivo snack!"
          />
          <TestimonialCard 
            image="https://github.com/shadcn.png"
            name="Marc Petit"
            role="Food Blogger"
            text="I've tried many taralli, but these are something special. The crunch, the flavor... simply divine. The spicy one is my favorite."
          />
          <TestimonialCard 
            image="https://github.com/shadcn.png"
            name="Chloé Dubois"
            role="Happy Customer"
            text="The perfect snack for any occasion. I always have a bag on hand for when guests come over. They disappear in minutes!"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;