"use client";
import { useCart } from "@/context/CartContext";

export default function CartAside() {
  const { isOpen, closeCart } = useCart();

  return (
    <>
      {/* Overlay (clica fora = fecha) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeCart}
        />
      )}

      {/* Gaveta do carrinho */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-2/5 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Seu Carrinho</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full text-lg"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <p>Conteúdo do carrinho...</p>
        </div>
      </aside>
    </>
  );
}
