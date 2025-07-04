import { create } from 'zustand';

interface AuthStore {
  isLoggedIn: boolean;
  setLogin: (status: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setLogin: (status) => set({ isLoggedIn: status }),
}));
