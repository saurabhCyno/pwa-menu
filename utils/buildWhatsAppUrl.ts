import { RESTAURANT } from "@/constants/restaurant";
import type { CartLine, CustomerDetails } from "@/types/cart";

export function buildWhatsAppUrl(
  customer: CustomerDetails,
  items: CartLine[],
  total: number
): string {
  const lines = [
    "Restaurant Order",
    "",
    `Customer Name: ${customer.name.trim()}`,
    `Contact Number: ${customer.contact.replace(/\D/g, "")}`,
    `Table Number: ${customer.tableNumber.trim()}`,
    "",
    "Ordered Items",
    "",
    ...items.map(({ item, quantity }) => `${item.name} ×${quantity}`),
    "",
    `Total: ₹${total.toLocaleString("en-IN")}`,
  ];

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${text}`;
}
