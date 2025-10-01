"use client";
import Link from "next/link";

const NavBar = ({ isOpen, desktop }: { isOpen?: boolean; desktop?: boolean }) => {
  if (desktop) {
    return (
      <nav className="hidden md:flex">
        <ul className="flex flex-row uppercase font-semibold gap-6">
          <li><Link href="/#cardapio">Cardápio</Link></li>
          <li><Link href="/#sobre">Sobre</Link></li>
          <li><Link href="/#avaliacoes">Avaliações</Link></li>
          <li><Link href="/#contato">Contato</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`transition-all duration-300 overflow-hidden md:hidden ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col uppercase font-semibold gap-4 py-2">
        <li><Link href="/#cardapio">Cardápio</Link></li>
        <li><Link href="/#sobre">Sobre</Link></li>
        <li><Link href="/#avaliacoes">Avaliações</Link></li>
        <li><Link href="/#contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
