import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCounter = create(persist((set) => ({
  count: 0,
  increaseNumber: () => set((state) => ({ count: state.count + 1 })),
  decreaseNumber: () => set((state) => ({ count: state.count - 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
})))

export default useCounter