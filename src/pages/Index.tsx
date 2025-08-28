import React from "react";
// The MadeWithDyad component is removed from here as the layout now provides the overall structure.

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        Welcome to My E-Shop!
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl text-center">
        Discover amazing products and enjoy a seamless shopping experience.
      </p>
      <div className="space-x-4">
        <a href="/products" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-primary/90 transition-colors text-lg font-medium">
          Shop Now
        </a>
        <a href="/about" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg font-medium">
          Learn More
        </a>
      </div>
      {/* Placeholder for featured products or categories */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Product Card Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 mx-auto mb-4 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
              Image
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Product Name</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">$99.99</p>
            <a href="/products/1" className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
              View Details
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 mx-auto mb-4 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
              Image
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Product Name</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">$99.99</p>
            <a href="/products/2" className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
              View Details
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 mx-auto mb-4 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
              Image
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Product Name</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">$99.99</p>
            <a href="/products/3" className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
              View Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;