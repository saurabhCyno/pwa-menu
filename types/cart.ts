import type { MenuItem } from "./menu";

export interface CartLine {
  item: MenuItem;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  contact: string;
  tableNumber: string;
}

export type CustomerField = keyof CustomerDetails;
