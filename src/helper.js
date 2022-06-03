// export function partition(arr, start, end) {
//   // Принимая последний элемент в качестве стержня
//   const pivotValue = arr[end];
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       // Замена элементов
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Переход к следующему элементу
//       pivotIndex++;
//     }
//   }

//   // Помещаем значение pivot в середину
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

//   return pivotIndex;
// }

// export function quickSortIterative(arr) {
//   // Создаем массив, который мы будем использовать в качестве стека, используя функции push() и pop()

//   let stack = [];

//   for (const i of arr) {
//     console.log(typeof i);
//   }
//   // Добавление всего исходного массива в качестве "несортированного подмассива"
//   stack.push(0);
//   stack.push(arr.length - 1);

//   // Явной функции peek() не существует
//   // Цикл повторяется до тех пор, пока у нас есть несортированные подмассивы
//   while (stack[stack.length - 1] >= 0) {
//     // Извлечение верхнего несортированного подмассива

//     let end = stack.pop();
//     let start = stack.pop();

//     let pivotIndex = partition(arr, start, end);

//     // Если есть несортированные элементы "слева" от оси,
//     // мы добавляем этот подмассив в стек, чтобы мы могли отсортировать его позже
//     if (pivotIndex - 1 > start) {
//       stack.push(start);
//       stack.push(pivotIndex - 1);
//     }

//     // Если есть несортированные элементы "справа" от оси,
//     // мы добавляем этот подмассив в стек, чтобы мы могли отсортировать его позже
//     if (pivotIndex + 1 < end) {
//       stack.push(pivotIndex + 1);
//       stack.push(end);
//     }
//   }
// }

function partition(items, left, right) {
  //rem that left and right are pointers.

  let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (items[i] < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (items[j] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

export function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(items, index, right);
    }
  }

  return items; //return the sorted array
}
