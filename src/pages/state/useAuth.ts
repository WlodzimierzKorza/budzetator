import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SignInProps } from "../../types";
import { useSessionState } from "../../state/useSessionState";
import { useSnackbar } from "notistack";
import { showError, showSuccess } from "../../utils/snackbar-utils";

const firebaseConfig = {
  apiKey: "AIzaSyDBq6gRkyn2vZt975Na9T5wYgwHDIGLvJE",
  authDomain: "budzetator.firebaseapp.com",
  projectId: "budzetator",
  storageBucket: "budzetator.appspot.com",
  messagingSenderId: "1089356967088",
  appId: "1:1089356967088:web:c05d341867b0f40462df75",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
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
      setUser(userCredential.user);
      showSuccess(enqueueSnackbar, "Logged");
    } catch (error) {
      showError(enqueueSnackbar, `Error signing in: ${error}`);
      console.error("Error signing in:", error);
      setUser(null);
      setLogged(false);
    } finally {
      setFetching(false);
    }
  };

  const signOutUser = async () => {
    setFetching(true);
    try {
      await signOut(getAuth());
      setUser(null);
      setLogged(false);
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setFetching(false);
    }
  };

  return { signIn, signOut: signOutUser };
};
