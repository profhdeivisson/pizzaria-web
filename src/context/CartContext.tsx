"use client";
import { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  qtd: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // 👈 inicializar como []
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

