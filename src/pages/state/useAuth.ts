import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SignInProps } from "../../types";
import { useSessionState } from "../../state/useSessionState";
import { useSnackbar } from "notistack";
import { showError, showSuccess } from "../../utils/snackbar-utils";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const useAuth = () => {
  const { setUser, setFetching, setLogged } = useSessionState();
  const { enqueueSnackbar } = useSnackbar();
  const signIn = async ({ email, password }: SignInProps) => {
    setFetching(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      showSuccess(
        enqueueSnackbar,
        `${user.displayName || user.email} został zalogowany`
      );
    } catch (error) {
      showError(enqueueSnackbar, `Error signing in: ${error}`);
      setUser(null);
      setLogged(false);
    } finally {
      setFetching(false);
    }
  };

  const signOutUser = async () => {
    setFetching(true);
    try {
      await signOut(getAuth(app));
      setUser(null);
      setLogged(false);
      setFetching(false);
      localStorage.removeItem("user");
    } catch (error) {
      showError(enqueueSnackbar, `Error signing out: ${error}`);
    } finally {
      setFetching(false);
    }
  };
  const registerUser = async ({ email, password }: SignInProps) => {
    setFetching(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      setLogged(true);
      localStorage.setItem("user", JSON.stringify(user));
      showSuccess(
        enqueueSnackbar,
        `${user.displayName || user.email} został zarejestrowany`
      );
      setFetching(false);
    } catch (error) {
      setFetching(false);
      setLogged(false);
      setUser(null);
      showError(enqueueSnackbar, `Error signing out: ${error}`);
    }
  };

  return { signIn, signOutUser, registerUser };
};
