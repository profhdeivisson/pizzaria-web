"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import NavBar from "./NavBar";
import { useState } from "react";

const Header = () => {
 const [cartOpen, setCartOpen] = useState(false)
  
 function toggleCartOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <header className="bg-red-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Voltar ao menu principal"
            scroll={false}
          >
            <div className="relative w-12 h-12">
              <Image
                src="/img/logo.png"
                alt="Pizzaria Bom Gosto"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="text-2xl font-black overflow-hidden">
              Bella
              <strong className="text-amber-400 inline-block align-baseline">
                Pizza
              </strong>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <NavBar />
            <div className="relative">
              <button
              onClick={toggleCartOpen}
                className="p-2 bg-red-700 rounded-full hover:bg-red-800 transition-colors"
                aria-label="Carrinho de compras"
              >
                { cartOpen ? <FiX size={20} /> : <FaShoppingCart size={20} />}
              </button>
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
             2 </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;