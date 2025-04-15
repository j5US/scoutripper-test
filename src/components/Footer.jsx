import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen max-w-7xl flex flex-col justify-center items-center ">
      <footer className="flex max-w-7xl flex-col sm:flex-row justify-between items-center w-full px-2 py-4 border-t border-calc-bound">
        <p className="text-sm text-center sm:text-left text-accent-footer">
          Copyright © {currentYear} by Scoutripper | Made with ❤️
        </p>
        <p className="text-sm text-center sm:text-left mt-4 sm:mt-0 hidden sm:block text-accent-footer">
          Scoutripper
        </p>
      </footer>
    </div>
  );
};

export default Footer;
