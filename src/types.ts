import { User as FirebaseUser } from "firebase/auth";
import { FirebaseApp } from "firebase/app";

export interface SessionState {
  fetching: boolean;
  logged: boolean;
  app: FirebaseApp;
  user: FirebaseUser | null;
  setUser: (user: FirebaseUser | null) => void;
  setFetching: (fetching: boolean) => void;
  setLogged: (logged: boolean) => void;
}

export interface SignInProps {
  email: string;
  password: string;
}
