import { useStore } from "./store";

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
