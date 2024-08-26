import { initializeApp } from "firebase/app";
import { create } from "zustand";
import { SessionState } from "../types";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useSessionState = create<SessionState>((set, get) => ({
  fetching: false,
  logged: false,
  user: null,
  setUser: (user) => set(() => ({ user: user, logged: user ? true : false })),
  setFetching: (fetching) => set(() => ({ fetching })),
  setLogged: (logged) => set(() => ({ logged })),
}));
