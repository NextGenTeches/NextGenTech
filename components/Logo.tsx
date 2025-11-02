"use client";
import Image from "next/image";


interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14 w-auto" }) => {
  return (
    <div className="relative">
      <Image
        src="/untitled-design.png"
        alt="NextGen Tech Logo"
        width={200} // Adjust width & height as per your logo
        height={60}
        className={`${className} rounded-md drop-shadow-md brightness-110 contrast-125 saturate-150`}
        priority
      />
    </div>
  );
};

export default Logo;
