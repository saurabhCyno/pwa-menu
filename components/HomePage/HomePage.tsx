"use client";

import { Header } from "@/components/Header/Header";
import { StickyFilterSection } from "@/components/StickyFilterSection/StickyFilterSection";
import { MenuList } from "@/components/Menu/MenuList";
import { FloatingCartButton } from "@/components/Cart/FloatingCartButton";
import { CartDrawer } from "@/components/Cart/CartDrawer";
import { InstallPrompt } from "@/components/Install/InstallPrompt";
import { ThankYouScreen } from "@/components/ThankYou/ThankYouScreen";
import { ToastContainer } from "@/components/ui/Toast";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";
import { useUIStore } from "@/store/useUIStore";

export function HomePage() {
  useDebouncedSearch(400);
  const showThankYou = useUIStore((s) => s.showThankYou);

  if (showThankYou) {
    return <ThankYouScreen />;
  }

  return (
    <>
      <Header />
      <main className="pb-28">
        <StickyFilterSection />
        <MenuList />
      </main>
      <FloatingCartButton />
      <CartDrawer />
      <InstallPrompt />
      <ToastContainer />
    </>
  );
}
