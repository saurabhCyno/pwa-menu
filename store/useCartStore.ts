import { create } from "zustand";
import type { MenuItem } from "@/types/menu";
import type { CartLine, CustomerDetails } from "@/types/cart";

interface CartState {
  items: Record<string, CartLine>;
  customer: CustomerDetails;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  setCustomerField: (field: keyof CustomerDetails, value: string) => void;
  resetCustomer: () => void;
  clearCart: () => void;
  getCartLines: () => CartLine[];
  totalItems: () => number;
  grandTotal: () => number;
}

const emptyCustomer: CustomerDetails = {
  name: "",
  contact: "",
  tableNumber: "",
};

export const useCartStore = create<CartState>((set, get) => ({
  items: {},
  customer: { ...emptyCustomer },

  addItem: (item) => {
    set((state) => {
      const existing = state.items[item.id];
      const quantity = (existing?.quantity ?? 0) + 1;
      return {
        items: {
          ...state.items,
          [item.id]: { item, quantity },
        },
      };
    });
  },

  removeItem: (id) => {
    set((state) => {
      const existing = state.items[id];
      if (!existing) return state;

      if (existing.quantity <= 1) {
        const { [id]: _, ...rest } = state.items;
        return { items: rest };
      }

      return {
        items: {
          ...state.items,
          [id]: { ...existing, quantity: existing.quantity - 1 },
        },
      };
    });
  },

  setQuantity: (id, quantity) => {
    if (quantity <= 0) {
      set((state) => {
        const { [id]: _, ...rest } = state.items;
        return { items: rest };
      });
      return;
    }

    set((state) => {
      const existing = state.items[id];
      if (!existing) return state;
      return {
        items: {
          ...state.items,
          [id]: { ...existing, quantity },
        },
      };
    });
  },

  setCustomerField: (field, value) => {
    set((state) => ({
      customer: { ...state.customer, [field]: value },
    }));
  },

  resetCustomer: () => set({ customer: { ...emptyCustomer } }),

  clearCart: () => set({ items: {}, customer: { ...emptyCustomer } }),

  getCartLines: () => Object.values(get().items),

  totalItems: () =>
    Object.values(get().items).reduce((sum, line) => sum + line.quantity, 0),

  grandTotal: () =>
    Object.values(get().items).reduce(
      (sum, line) => sum + line.item.price * line.quantity,
      0
    ),
}));
