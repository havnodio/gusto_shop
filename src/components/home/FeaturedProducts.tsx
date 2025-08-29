import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const fetchFeaturedProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(4)
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data as Product[];
};

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['featured-products'],
    queryFn: fetchFeaturedProducts,
  });

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Products</h2>
          <p className="text-muted-foreground mt-2">A selection of our finest, handcrafted taralli.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader><Skeleton className="h-48 w-full" /></CardHeader>
                <CardContent><Skeleton className="h-6 w-3/4" /></CardContent>
                <CardFooter><Skeleton className="h-10 w-full" /></CardFooter>
              </Card>
            ))
          ) : (
            products?.map(product => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <img src={product.image_url || '/placeholder.svg'} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-primary font-semibold mt-2">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full" onClick={() => addToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;