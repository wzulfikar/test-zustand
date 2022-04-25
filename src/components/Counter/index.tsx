import create from "zustand";
import { devtools } from "zustand/middleware";

interface CounterStore {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useStore = create<CounterStore>()(
  devtools((set, get) => ({
    count: 0,
    inc: () => set({ count: get().count + 1 }),
    dec: () => set({ count: get().count - 1 }),
  }))
);

export function Counter() {
  const { count, inc, dec } = useStore();
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={dec}>Decrement</button>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
