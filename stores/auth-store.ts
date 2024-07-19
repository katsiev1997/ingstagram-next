import { create } from "zustand";

export type AuthState = {
  token: string;
  userData: {
    id: number;
    profileImageUrl: string;
    username: string;
    email: string;
    fullname: string;
  } | null;
};

export type AuthActions = {
  auth: (
    token: string,
    userData: {
      id: number;
      profileImageUrl: string;
      email: string;
      username: string;
      fullname: string;
    }
  ) => void;
  logout: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  token: "",
  userData: null,
};

export const useAuthStore = create<AuthStore>()((set) => ({
  ...defaultInitState,
  auth: (token, userData) => set((state) => ({ token, userData })),
  logout: () =>
    set((state) => ({
      token: "",
      userData: null,
    })),
}));
