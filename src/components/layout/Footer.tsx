import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My E-Shop. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a> | 
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;