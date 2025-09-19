"use client";
import React from "react";
import { useCart } from "../context/CartContext"; // <-- ajuste se sua pasta for diferente

export default function CartAside() {
  const { isOpen, closeCart, cartItems } = useCart();

  // Sempre renderiza para permitir transição; controlamos visibilidade por classes
  return (
    <div
      className={`fixed inset-0 z-50 flex pointer-events-none transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Overlay (3/5) */}
      <div
        onClick={closeCart}
        className={`w-3/5 h-full transition-opacity duration-300 ${
          isOpen ? "bg-black bg-opacity-40 opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer (2/5) */}
      <aside
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Carrinho de compras"
        className={`w-2/5 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold text-red-600">Seu Carrinho</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full text-lg"
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="border-b py-3">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">Qtd: {item.qtd}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Carrinho vazio</p>
          )}
        </div>
      </aside>
    </div>
  );
}

