import {
  getAuth,
  GoogleAuthProvider,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export async function googleLogin() {
  const auth = getAuth();

  try {
    await setPersistence(auth, inMemoryPersistence);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    return await signInWithPopup(auth, provider);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error({ errorCode, errorMessage });
  }
}

export function logout() {
  const auth = getAuth();
  return signOut(auth);
}
