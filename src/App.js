import { useState } from 'react';
import './App.css';
import { quickSort } from './helper';

function App() {
  const [value, setValue] = useState();
  const [result, setResult] = useState();

  function setVal(e) {
    let value;
    value = e.target.value
      .replace(/[^0-9,-]/g, '')
      .replace(/,,/g, ',')
      .replace(/-,/g, ',')
      .replace(/--/, '-');
    if (value[0] === ',') {
      value = value.substr(1, value.length);
    }
    setValue(value);
  }

  function addArr(value) {
    let arr = value.split(',');
    arr = arr.map(parseFloat);
    arr = quickSort(arr, 0, arr.length - 1)
      .slice(0, 2)
      .reduce((a, b) => a + b);
    return arr;
  }
  return (
    <div className="App">
      <input value={value} onChange={setVal}></input>
      <button onClick={() => setResult(addArr(value))}>Click</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
