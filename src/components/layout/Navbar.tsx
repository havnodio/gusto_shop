import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My E-Shop
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/products">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              Products
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
          </Link>
          <Link to="/account">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </Link>
          {/* Admin link - will be conditionally rendered later */}
          <Link to="/admin">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;