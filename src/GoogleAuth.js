import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

export async function googleLogin() {
  const auth = getAuth();

  try {
    await setPersistence(auth, browserSessionPersistence);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    return await signInWithRedirect(auth, provider);
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

export function onAuthChange(onChange) {
  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    console.log("onAuthStateChanged", user);
    onChange(user);
  });
}
