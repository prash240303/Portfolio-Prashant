import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavBar from "./Navbar";

function Header() {
  return (
    <header className="relative mt-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="absolute left-4 md:left-10 md:top-4">
        <Image
          alt="logo-prashant"
          src="/logo.png"
          className="w-32 h-12 filter dark:invert"
          width={500}
          height={500}
        />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
