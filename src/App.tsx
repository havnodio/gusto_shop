import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AdminDashboard from "./pages/admin/Index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProductsPage from "./pages/Products";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/Cart";
import AdminOrdersPage from "./pages/admin/Orders";
import HomeNavbar from "./components/home/HomeNavbar";
import HomeFooter from "./components/home/HomeFooter";

const queryClient = new QueryClient();

const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <HomeNavbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <HomeFooter />
  </div>
);

const MainContentLayout = () => (
  <div className="container mx-auto px-4 py-8">
    <Outlet />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              {/* Routes with full-width layout (like the home page) */}
              <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />

                {/* Routes with containerized content */}
                <Route element={<MainContentLayout />}>
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route 
                    path="/account" 
                    element={
                      <ProtectedRoute>
                        <Account />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute role="admin">
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin/orders" 
                    element={
                      <ProtectedRoute role="admin">
                        <AdminOrdersPage />
                      </ProtectedRoute>
                    } 
                  />
                </Route>
              </Route>
              
              {/* Standalone routes */}
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;