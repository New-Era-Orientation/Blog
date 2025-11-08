import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return (
    <div
      className={`flex items-center justify-center rounded-full border-2 border-gray-300 shadow-md bg-white overflow-hidden ${className}`}
      aria-label="New Era Orientation Logo"
    >
      <img
        src={`${baseUrl}logo.png`}
        alt="Logo New Era Orientation"
        className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Logo;
