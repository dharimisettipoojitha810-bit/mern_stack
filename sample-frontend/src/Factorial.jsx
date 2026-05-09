/* eslint-disable react-hooks/set-state-in-render */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

const Factorial = () => {
  const [num, setNumber] = useState(1);
  const [count, setCount] = useState(1);
  const [result, setResult] = useState(1);
  const factorial = () => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    setResult(fact);
  };
//useMemo hook execute only when number change
  useMemo(() => {
    factorial();
  }, [num]);

  return (
    <div className="h-60 m-5">
      <h1 className="text-center text-3xl font-bold">Factorial </h1>
      <input
        type="number"
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        placeholder="Enter value to find Factorial"
      />{" "}
      <div>Factorial :{result}</div>
      <button
        className="bg-red-500 p-4 rounded-3xl mx-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count {count}
      </button>
      <button
        className="bg-green-500 p-5 rounded-3xl mx-3"
        onClick={() => {
          setNumber(num + 1);
        }}
      >
        Increment number : {num} :{result}
      </button>
    </div>
  );
};

export default Factorial;