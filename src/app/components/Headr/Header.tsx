"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { isOpen, toggleCart, cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // quantidade total de itens
  const totalItems = (cartItems ?? []).reduce((acc, item) => acc + item.qtd, 0);

  return (
    <>
      <header className="bg-red-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
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

            {/* Menu + Carrinho */}
            <div className="flex items-center gap-6">
              {/* Menu Desktop */}
              <nav className="hidden md:flex gap-6 uppercase font-semibold text-sm">
                <Link href="/#cardapio" className="hover:text-amber-400">
                  Cardápio
                </Link>
                <Link href="/#promocoes" className="hover:text-amber-400">
                  Promoções
                </Link>
                <Link href="/#sobre" className="hover:text-amber-400">
                  Sobre Nós
                </Link>
                <Link href="/#contato" className="hover:text-amber-400">
                  Contato
                </Link>
              </nav>

              {/* Carrinho */}
              <div className="relative">
                <button
                  onClick={toggleCart}
                  className="p-2 bg-red-700 rounded-full hover:bg-red-800 transition-colors"
                  aria-label="Carrinho de compras"
                >
                  <FaShoppingCart size={20} />
                </button>

                {/* Badge */}
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* Menu Hambúrguer Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 bg-red-700 rounded-full hover:bg-red-800 transition-colors"
                aria-label="Abrir menu"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 bg-red-700 rounded-lg p-4">
              <nav className="flex flex-row gap-3 uppercase font-semibold text-sm">
                <Link href="/#cardapio" className="hover:text-amber-400">
                  Cardápio
                </Link>
                <Link href="/#promocoes" className="hover:text-amber-400">
                  Promoções
                </Link>
                <Link href="/#sobre" className="hover:text-amber-400">
                  Sobre Nós
                </Link>
                <Link href="/#contato" className="hover:text-amber-400">
                  Contato
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Carrinho Lateral */}
      {isOpen && (
        <aside className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-red-600">Seu Carrinho</h2>
            <button onClick={toggleCart}>
              <FiX className="text-zinc-800 font-black" size={20} />
            </button>
          </div>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="border-b py-2">
                  <span className="font-semibold">{item.name}</span> —{" "}
                  <span className="text-gray-600">Qtd: {item.qtd}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Carrinho vazio</p>
          )}
        </aside>
      )}
    </>
  );
};

export default Header;
