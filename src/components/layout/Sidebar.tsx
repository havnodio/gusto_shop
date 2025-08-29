import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, User, LogIn, LayoutDashboard, Package, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';

const Sidebar = () => {
  const { session, profile, signOut } = useAuth();
  const { cartCount } = useCart();
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/cart', label: 'Cart', icon: ShoppingCart, badge: cartCount > 0 ? cartCount : undefined },
    { href: '/account', label: 'Account', icon: User, auth: true },
  ];

  const adminNavItems = [
    { href: '/admin', label: 'Admin', icon: LayoutDashboard },
  ];

  const getInitials = () => {
    if (!profile) return '';
    const firstName = profile.first_name || '';
    const lastName = profile.last_name || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const NavLink = ({ href, label, icon: Icon, badge }: { href: string, label: string, icon: React.ElementType, badge?: number }) => {
    const isActive = location.pathname === href;
    return (
      <Link
        to={href}
        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
      >
        <Icon className="mr-3 h-5 w-5" />
        <span>{label}</span>
        {badge !== undefined && (
          <Badge variant="destructive" className="ml-auto">
            {badge}
          </Badge>
        )}
      </Link>
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-background flex flex-col">
      <div className="p-6">
        <Link to="/" className="text-2xl font-bold text-primary">
          Gusto Club
        </Link>
      </div>
      <nav className="flex-grow px-4 space-y-2">
        {navItems.map(item => (
          (!item.auth || session) && <NavLink key={item.label} {...item} />
        ))}
        {profile?.role === 'admin' && adminNavItems.map(item => (
          <NavLink key={item.label} {...item} />
        ))}
      </nav>
      <div className="p-4 mt-auto border-t">
        {session && profile ? (
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={profile.avatar_url} />
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="text-sm font-semibold">{`${profile.first_name || ''} ${profile.last_name || ''}`.trim()}</p>
              <p className="text-xs text-muted-foreground">{profile.role}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={signOut}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <Link to="/login" className="w-full">
            <Button variant="outline" className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;