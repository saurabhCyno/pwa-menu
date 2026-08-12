import { create } from "zustand";

interface UIState {
  isCartOpen: boolean;
  showThankYou: boolean;
  openCart: () => void;
  closeCart: () => void;
  showConfirmation: () => void;
  hideConfirmation: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  showThankYou: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  showConfirmation: () => set({ showThankYou: true, isCartOpen: false }),
  hideConfirmation: () => set({ showThankYou: false }),
}));
