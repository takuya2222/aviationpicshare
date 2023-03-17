import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-white border-b shadow-lg sticky">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="text-3xl">AviationPic</div>
        <div>
          <ul className="flex space-x-10">
            <li>Home</li>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/sign-in">
              <a>Sign in</a>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
