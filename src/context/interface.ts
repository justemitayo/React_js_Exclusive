import { createContext } from "react";

interface StoreContextType {
    food_list: Array<{
      _id: string;
      name: string;
      image: string;
      price: number;
      category: string;
    }>;
    cartItem: {};
    setCartItem: React.Dispatch<React.SetStateAction<{}>>;
    likeItem: {};
    setLikeItem: {};
    addToCart: (termId: string) => void;
    removeFromCart: (termId: string) => void;
    addToLike: (termId: string) => void;
    removeFromLike: (termId: string) => void;
    getTotalCart: () => number
  }

export const StoreContext = createContext<StoreContextType | undefined>(undefined);
