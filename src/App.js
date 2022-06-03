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

  function strToArrNums(str) {
    let arr;
    console.log(str);
    if (str === undefined) {
      arr = [];
    } else {
      arr = str.split(',').map(parseFloat);
    }
    arr = sumOfTwoMinElenents(arr);

    return arr;
  }

  function sumOfTwoMinElenents(arr) {
    if (
      arr.length == 0 ||
      !Array.isArray(arr) ||
      arr.every((e) => typeof e === 'number')
    ) {
      return 'Введите корректные данные';
    } else {
      arr = quickSort(arr, 0, arr.length - 1)
        .slice(0, 2)
        .reduce((a, b) => a + b);
      console.log(arr);
      return arr;
    }
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
