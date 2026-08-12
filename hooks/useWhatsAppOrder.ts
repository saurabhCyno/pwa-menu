"use client";

import { useCallback } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { buildWhatsAppUrl } from "@/utils/buildWhatsAppUrl";
import { validateCustomer } from "@/utils/validateCustomer";

export function useWhatsAppOrder() {
  const customer = useCartStore((s) => s.customer);
  const getCartLines = useCartStore((s) => s.getCartLines);
  const grandTotal = useCartStore((s) => s.grandTotal);
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const placeOrder = useCallback(() => {
    const errors = validateCustomer(customer);
    if (Object.keys(errors).length > 0) {
      return errors;
    }

    const lines = getCartLines();
    if (lines.length === 0) return { cart: "Your cart is empty" };

    const url = buildWhatsAppUrl(customer, lines, grandTotal());
    window.open(url, "_blank", "noopener,noreferrer");
    showConfirmation();
    return {};
  }, [customer, getCartLines, grandTotal, showConfirmation]);

  return { placeOrder };
}
