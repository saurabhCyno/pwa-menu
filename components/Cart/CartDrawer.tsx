"use client";

import { useEffect, useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CartItem } from "@/components/Cart/CartItem";
import { EmptyCart } from "@/components/Cart/EmptyCart";
import { CustomerForm } from "@/components/CustomerForm/CustomerForm";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { useWhatsAppOrder } from "@/hooks/useWhatsAppOrder";
import { formatPrice } from "@/utils/formatPrice";
import { fadeOverlay } from "@/lib/motion";
import type { CustomerField } from "@/types/cart";

export function CartDrawer() {
  const isCartOpen = useUIStore((s) => s.isCartOpen);
  const closeCart = useUIStore((s) => s.closeCart);
  const itemsRecord = useCartStore((s) => s.items);
  const grandTotal = useCartStore((s) => s.grandTotal());
  const items = useMemo(() => Object.values(itemsRecord), [itemsRecord]);
  const { placeOrder } = useWhatsAppOrder();
  const [errors, setErrors] = useState<Partial<Record<CustomerField, string>>>({});

  const clearError = useCallback((field: CustomerField) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handlePlaceOrder = useCallback(() => {
    const result = placeOrder();
    if (Object.keys(result).length > 0) {
      setErrors(result as Partial<Record<CustomerField, string>>);
    }
  }, [placeOrder]);

  useEffect(() => {
    if (!isCartOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }

    const shell = document.getElementById("app-shell");
    document.body.style.overflow = "hidden";
    if (shell) shell.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      if (shell) shell.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            variants={fadeOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            onClick={closeCart}
            aria-hidden
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-y-0 left-0 right-0 z-50 mx-auto flex max-w-[430px] flex-col bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-4">
              <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
              <button
                type="button"
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                aria-label="Close cart"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((line) => (
                      <CartItem key={line.item.id} line={line} />
                    ))}
                  </AnimatePresence>
                </ul>

                <div className="border-t border-neutral-100 px-4 py-4">
                  <CustomerForm errors={errors} onClearError={clearError} />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-600">
                      Grand Total
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-4 w-full gap-2"
                    onClick={handlePlaceOrder}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.528 5.867L.06 23.495l5.753-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.817 9.817 0 01-4.988-1.362l-.358-.213-3.407.894.909-3.318-.234-.375A9.817 9.817 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
                    </svg>
                    Place Order via WhatsApp
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
