"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl"></div>

        {/* Menu para desktop */}
        <ul className="hidden md:flex uppercase font-semibold flex-row gap-6">
          <li>
            <Link href="/#cardapio" className="hover:text-red-200 transition-colors">
              Cardápio
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-200 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-200 transition-colors">
              Avaliações
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-200 transition-colors">
              Contato
            </Link>
          </li>
        </ul>

        {/* Botão hambúrguer para mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 uppercase font-semibold text-white md:hidden">
          <li>
            <Link href="/#cardapio" onClick={() => setIsOpen(false)}>
              Cardápio
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Avaliações
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

