import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

// Basic Crud Functions
export async function getCollection(uid, path) {
  if (!(uid || path)) return;

  const q = query(collection(db, `users/${uid}/${path}`));
  const snap = await getDocs(q);

  const entries = {};
  snap.forEach(doc => {
    entries[doc.id] = doc.data();
  });

  return entries;
}

export function subscribeToCollection(uid, path, onUpdate, order) {
  if (!(uid || collection || onUpdate)) return;

  let expensesQuery;
  if (order) {
    expensesQuery = query(
      collection(db, `users/${uid}/${path}`),
      orderBy(order.field, order.direction)
    );
  } else {
    expensesQuery = query(collection(db, `users/${uid}/${path}`));
  }

  const unsubscribe = onSnapshot(expensesQuery, snap => {
    const entries = {};
    snap.forEach(doc => {
      entries[doc.id] = { ...doc.data(), id: doc.id };
    });

    onUpdate(entries);
  });

  return unsubscribe;
}

export function addDocument(uid, path, entry) {
  if (!(uid || path || entry)) return;
  addDoc(collection(db, `users/${uid}/${path}`), entry);
}

export function updateDocument(uid, path, entry) {
  if (!uid) return;
  const docRef = doc(db, `users/${uid}/${path}`);
  updateDoc(docRef, entry);
}

export function deleteDocument(uid, path) {
  if (!(uid || path)) return;
  deleteDoc(doc(db, `users/${uid}/${path}`));
}

// Domain Specific Handlers
export function subscribeExpenses(uid, portfolio, onUpdate) {
  return subscribeToCollection(
    uid,
    `portfolios/${portfolio}/expenses`,
    onUpdate,
    { field: "date", direction: "desc" }
  );
}

export function getPortfolios(uid) {
  return getCollection(uid, "portfolios");
}

export function addPortfolio(uid, portfolio) {
  return addDocument(uid, `portfolios`, portfolio);
}

export function deletePortfolio(uid, portfolio) {
  return deleteDocument(uid, `portfolios/${portfolio}`);
}

export function getSubscriptions(uid) {
  return getCollection(uid, "subscriptions");
}

export function addExpense(uid, portfolio, expense) {
  addDocument(uid, `portfolios/${portfolio}/expenses`, expense);
}

export function addSubscription(uid, subscription) {
  addDocument(uid, "subscriptions", subscription);
}

export function updateExpense(uid, portfolio, expenseId, expense) {
  updateDocument(uid, `portfolios/${portfolio}/expenses/${expenseId}`, expense);
}

export function deleteExpense(uid, portfolio, expenseId) {
  deleteDocument(uid, `portfolios/${portfolio}/expenses/${expenseId}`);
}
