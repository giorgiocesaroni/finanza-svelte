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

/**
 * Basic Crud Functions
 *
 * get
 * subscribe
 * create (add)
 * update
 * delete
 */
export async function getCollection(uid, collectionId) {
  if (!(uid || collectionId)) return;

  const q = query(collection(db, `users/${uid}/${collectionId}`));
  const snap = await getDocs(q);

  const entries = {};
  snap.forEach(doc => {
    entries[doc.id] = doc.data();
  });

  return entries;
}

export function subscribeToCollection(uid, collectionId, onUpdate) {
  if (!(uid || collection || onUpdate)) return;
  const expensesQuery = query(collection(db, `users/${uid}/${collectionId}`));

  const unsubscribe = onSnapshot(expensesQuery, snap => {
    const entries = {};
    snap.forEach(doc => {
      entries[doc.id] = { ...doc.data(), id: doc.id };
    });

    onUpdate(entries);
  });

  return unsubscribe;
}

export function addDocument(uid, documentName, entry = {}) {
  if (!(uid || documentName)) return;
  addDoc(collection(db, `users/${uid}/${documentName}`), entry);
}

export function updateDocument(uid, collectionId, documentId, entry) {
  if (!uid) return;
  const docRef = doc(
    db,
    `users/${uid}/portfolios/${collectionId}/${documentId}`
  );
  updateDoc(docRef, entry);
}

export function deleteDocument(uid, collectionId, documentId) {
  if (!(uid || collectionId || documentId)) return;
  deleteDoc(doc(db, `users/${uid}/${collectionId}/${documentId}`));
}

/**
 * Domain Specific Handlers
 */
export function subscribeExpenses(uid, portfolio, onUpdate) {
  return subscribeToCollection(
    uid,
    `portfolios/${portfolio}/expenses`,
    onUpdate
  );
}

export function getPortfolios(uid) {
  return getCollection(uid, "portfolios");
}

export function addPortfolio(uid, portfolio) {
  return addDocument(uid, `portfolios`, portfolio);
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
  updateDocument(uid, `portfolio/${portfolio}/expenses`, expenseId, expense);
}

export function deleteExpense(uid, portfolio, expenseId) {
  deleteDocument(uid, `portfolios/${portfolio}/expenses`, expenseId);
}
