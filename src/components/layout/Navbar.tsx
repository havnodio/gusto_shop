import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogIn, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { session, profile } = useAuth();
  const { cartCount } = useCart();

  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Gusto Club
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/products">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              Products
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 relative">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
              {cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-0.5 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          {session ? (
            <>
              <Link to="/account">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </Button>
              </Link>
              {profile?.role === 'admin' && (
                <Link to="/admin">
                  <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Admin
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <Link to="/login">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;