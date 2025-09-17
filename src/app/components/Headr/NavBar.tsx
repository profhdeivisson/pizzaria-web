"use client";

import Link from "next/link";
import { useState } from "react";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão Hamburguer (mobile) */}
      <button 
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
       
      </button>

      {/* Menu Desktop (sempre visível em telas grandes) */}
      <ul className="hidden md:flex gap-2 font-bold text-2xl">
        <li><Link href="/#cardapio" className="hover:text-red-200 transition-colors">Cardápio</Link></li>
        <li><Link href="#" className="hover:text-red-200 transition-colors">Sobre</Link></li>
        <li><Link href="#" className="hover:text-red-200 transition-colors">Avaliações</Link></li>
        <li><Link href="#" className="hover:text-red-200 transition-colors">Contato</Link></li>
      </ul>

      {/* Menu Mobile (aparece quando isOpen = true) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-red-600 shadow-lg py-4 px-4 z-40">
          <ul className="flex flex-col gap-4">
            <li><Link href="#" onClick={toggleMenu} className="block hover:text-red-200 transition-colors">Cardápio</Link></li>
            <li><Link href="#" onClick={toggleMenu} className="block hover:text-red-200 transition-colors">Sobre</Link></li>
            <li><Link href="#" onClick={toggleMenu} className="block hover:text-red-200 transition-colors">Avaliações</Link></li>
            <li><Link href="#" onClick={toggleMenu} className="block hover:text-red-200 transition-colors">Contato</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
