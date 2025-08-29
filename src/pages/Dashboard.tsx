import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingBag, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const DashboardCard = ({ title, description, icon: Icon, link, linkText }: { title: string, description: string, icon: React.ElementType, link: string, linkText: string }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <p className="text-xs text-muted-foreground mb-4">{description}</p>
      <Button asChild variant="outline" size="sm">
        <Link to={link}>
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {profile?.first_name || 'Guest'}!
        </h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your shop.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Browse Products"
          description="Explore our collection of amazing products."
          icon={Package}
          link="/products"
          linkText="Shop Now"
        />
        <DashboardCard
          title="Order History"
          description="View your past orders and track their status."
          icon={ShoppingBag}
          link="/account" // The account page has an order history tab
          linkText="View Orders"
        />
        <DashboardCard
          title="Manage Account"
          description="Update your personal information and settings."
          icon={User}
          link="/account"
          linkText="Go to Account"
        />
      </div>
    </div>
  );
};

export default Dashboard;