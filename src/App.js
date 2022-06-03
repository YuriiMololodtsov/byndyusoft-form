import { useState } from 'react';
import './App.css';
import { sumOfTwoMinElenents } from './helper';

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

  function strToArrNums(str) {
    let arr;

    if (str === undefined) {
      arr = [];
    } else {
      console.log(typeof str);
      arr = str.split(',').map(parseFloat);
      console.log(arr);
    }

    return sumOfTwoMinElenents(arr);
  }

  return (
    <div className="App">
      <input value={value} onChange={setVal}></input>
      <button onClick={() => setResult(strToArrNums(value))}>Click</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
