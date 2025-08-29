import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface Order {
  id: string;
  created_at: string;
  total: number;
  status: string;
  user_id: string;
  profiles: {
    first_name: string;
    last_name: string;
  } | null;
}

const fetchOrders = async (): Promise<Order[]> => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      id,
      created_at,
      total,
      status,
      user_id,
      profiles (first_name, last_name)
    `)
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data as Order[];
};

const AdminOrdersPage = () => {
  const { data: orders, isLoading } = useQuery<Order[]>({
    queryKey: ['admin-orders'],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-1/4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map(order => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">{order.id.split('-')[0]}</TableCell>
                  <TableCell>{order.profiles ? `${order.profiles.first_name} ${order.profiles.last_name}` : 'N/A'}</TableCell>
                  <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrdersPage;