import { writable } from "svelte/store";

export const authStore = writable(null);
export const expensesStore = writable(null);
export const selectedExpenseStore = writable(null);
export const selectedPortfolioStore = writable(null);
