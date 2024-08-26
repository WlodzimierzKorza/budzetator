import { User as FirebaseUser } from "firebase/auth";

export interface SessionState {
  fetching: boolean;
  logged: boolean;
  user: FirebaseUser | null;
  setUser: (user: FirebaseUser | null) => void;
  setFetching: (fetching: boolean) => void;
  setLogged: (logged: boolean) => void;
}

export interface SignInProps {
  email: string;
  password: string;
}
