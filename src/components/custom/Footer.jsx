import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-Black py-4 mt-40 text-center">
      <div className="container mx-auto px-4 text-center sm:text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-2 flex flex-wrap justify-center sm:justify-center gap-4">
          <a
            href="/terms"
            className="text-orange-400 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-orange-400 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
