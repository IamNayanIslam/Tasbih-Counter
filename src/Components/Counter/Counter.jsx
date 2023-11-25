import { useState } from "react";
// import "./Counter.CSS";

export default function Counter() {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => (prevCount < 33 ? prevCount + 1 : prevCount));
  };

  const reset = () => {
    setCount(0);
  };

  const tasbihChange = () => {
    setCount(0);
  };
  return (
    <div className="counterApp">
      <h1>Tasbih Counter App</h1>
      <label htmlFor="tasbih">Chose your Tasbih: </label>
      <select name="tasbih" id="tasbih" onChange={tasbihChange}>
        <option value="Subhan-Allah">Subhan-Allah</option>
        <option value="Alhamdulillah">Alhamdulillah</option>
        <option value="Allahuakbar">Allahuakbar</option>
      </select>
      <h2>{count}</h2>
      <p className="word" id="tasbihWord"></p>
      <div className="buttons">
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
