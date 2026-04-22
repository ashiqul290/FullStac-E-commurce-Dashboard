import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginInfo = create((set) => ({
  user: null,
  addUserInfo: (userData) => set(() => ({ user: userData })),
}));

export default useLoginInfo;
