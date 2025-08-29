import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Gusto Club Tunisie. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default HomeFooter;