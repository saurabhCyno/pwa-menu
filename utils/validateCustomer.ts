import type { CustomerDetails, CustomerField } from "@/types/cart";

export function validateCustomer(
  customer: CustomerDetails
): Partial<Record<CustomerField, string>> {
  const errors: Partial<Record<CustomerField, string>> = {};

  if (!customer.name.trim()) {
    errors.name = "Name is required";
  }

  const digits = customer.contact.replace(/\D/g, "");
  if (!digits) {
    errors.contact = "Contact number is required";
  } else if (!/^[6-9]\d{9}$/.test(digits)) {
    errors.contact = "Enter a valid 10-digit mobile number";
  }

  if (!customer.tableNumber.trim()) {
    errors.tableNumber = "Table number is required";
  }

  return errors;
}

export function normalizeContact(contact: string): string {
  return contact.replace(/\D/g, "").slice(0, 10);
}
