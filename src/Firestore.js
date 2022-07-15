import { db } from "./Firebase";
import {
  query,
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc,
  orderBy,
  getDocs,
} from "firebase/firestore";

export function subscribeExpenses(uid, portfolio, onUpdate) {
  if (!(uid && portfolio)) return;

  const expensesQuery = query(
    collection(db, `users/${uid}/portfolios/${portfolio}/expenses`),
    orderBy("date", "desc")
  );

  const unsubscribe = onSnapshot(expensesQuery, snap => {
    const entries = {};
    snap.forEach(doc => {
      entries[doc.id] = { ...doc.data(), id: doc.id };
    });

    onUpdate(entries);
  });

  return unsubscribe;
}

export async function getPortfolios(uid) {
  if (!uid) return;

  const portfoliosQuery = query(collection(db, `users/${uid}/portfolios`));
  const snap = await getDocs(portfoliosQuery);

  const portfolios = {};
  snap.forEach(doc => {
    portfolios[doc.id] = doc.data();
  });

  return portfolios;
}

export function addExpense(uid, portfolio, expense) {
  if (!uid) return;

  addDoc(
    collection(db, `users/${uid}/portfolios/${portfolio}/expenses`),
    expense
  );
}

export function updateExpense(uid, portfolio, expenseId, expense) {
  if (!uid) return;

  const docRef = doc(
    db,
    `users/${uid}/portfolios/${portfolio}/expenses/${expenseId}`
  );
  updateDoc(docRef, expense);
}

export function deleteExpense(uid, portfolio, expenseId) {
  if (!uid) return;

  deleteDoc(
    doc(db, `users/${uid}/portfolios/${portfolio}/expenses/${expenseId}`)
  );
}
