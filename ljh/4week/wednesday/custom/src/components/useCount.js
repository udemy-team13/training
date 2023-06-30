import { useCounter } from "../hooks/countHook";

export default function UseCount() {
  const hooks = useCounter(1);
  console.log(hooks);

  return (
    <div>
      <p>카운트 : {hooks.count}</p>
      <button onClick={hooks.incrementCount}>+++</button>
    </div>
  );
}
