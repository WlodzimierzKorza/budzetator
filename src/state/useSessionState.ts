import { initializeApp } from "firebase/app";
import { create } from "zustand";
import { SessionState } from "../types";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
export const useSessionState = create<SessionState>((set, get) => ({
  fetching: false,
  logged: false,
  app,
  user: null,
  setUser: (user) => set(() => ({ user: user, logged: user ? true : false })),
  setFetching: (fetching) => set(() => ({ fetching })),
  setLogged: (logged) => set(() => ({ logged })),
}));
