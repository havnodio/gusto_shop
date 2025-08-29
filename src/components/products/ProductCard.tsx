import React from 'react';
import { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isAdmin, onEdit, onDelete }) => {
  const placeholderImage = '/placeholder.svg';

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.image_url || placeholderImage}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-semibold mb-2 truncate">{product.name}</CardTitle>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground mt-2">
          {product.categories?.name} - {product.brands?.name}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <Button>View Details</Button>
        {isAdmin && (
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={onEdit}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="icon" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;