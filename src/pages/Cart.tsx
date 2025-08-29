import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { showError, showSuccess } from '@/utils/toast';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user, session } = useAuth();
  const navigate = useNavigate();

  const createOrderMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('You must be logged in to place an order.');

      // 1. Create the order
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({ user_id: user.id, total: cartTotal })
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Create order items
      const orderItems = cartItems.map(item => ({
        order_id: orderData.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase.from('order_items').insert(orderItems);

      if (itemsError) {
        // Attempt to roll back order creation if items fail to insert
        await supabase.from('orders').delete().eq('id', orderData.id);
        throw itemsError;
      }

      return orderData;
    },
    onSuccess: () => {
      showSuccess('Order placed successfully!');
      clearCart();
      navigate('/account'); // Redirect to account page
    },
    onError: (error) => {
      showError(error.message);
    },
  });

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    className="w-20"
                  />
                </TableCell>
                <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          Total: ${cartTotal.toFixed(2)}
        </div>
        {session ? (
          <Button onClick={() => createOrderMutation.mutate()} disabled={createOrderMutation.isPending}>
            {createOrderMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirm Order
          </Button>
        ) : (
          <Button asChild>
            <Link to="/login">Login to Checkout</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CartPage;