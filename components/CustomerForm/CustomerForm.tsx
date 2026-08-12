"use client";

import { useState, useCallback } from "react";
import type { CustomerField } from "@/types/cart";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/store/useCartStore";
import { normalizeContact } from "@/utils/validateCustomer";

interface CustomerFormProps {
  errors: Partial<Record<CustomerField, string>>;
  onClearError: (field: CustomerField) => void;
}

export function CustomerForm({ errors, onClearError }: CustomerFormProps) {
  const customer = useCartStore((s) => s.customer);
  const setCustomerField = useCartStore((s) => s.setCustomerField);

  const handleChange = useCallback(
    (field: CustomerField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (field === "contact") {
        value = normalizeContact(value);
      }
      setCustomerField(field, value);
      onClearError(field);
    },
    [setCustomerField, onClearError]
  );

  return (
    <div className="space-y-3 border-t border-neutral-100 pt-4">
      <h3 className="text-sm font-semibold text-neutral-800">
        Customer Details
      </h3>
      <Input
        label="Customer Name"
        name="name"
        value={customer.name}
        onChange={handleChange("name")}
        placeholder="Enter your name"
        error={errors.name}
        autoComplete="name"
      />
      <Input
        label="Contact Number"
        name="contact"
        type="tel"
        inputMode="numeric"
        value={customer.contact}
        onChange={handleChange("contact")}
        placeholder="10-digit mobile number"
        error={errors.contact}
        autoComplete="tel"
        maxLength={10}
      />
      <Input
        label="Table Number"
        name="tableNumber"
        value={customer.tableNumber}
        onChange={handleChange("tableNumber")}
        placeholder="e.g. 12"
        error={errors.tableNumber}
      />
    </div>
  );
}
