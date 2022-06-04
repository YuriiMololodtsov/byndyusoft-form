function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

function sumOfTwoMinElenents(arr) {
  if (arr.length === 0 || !Array.isArray(arr) || arr.every((e) => isNaN(e))) {
    return 'Введите корректные данные';
  } else {
    arr = quickSort(arr, 0, arr.length - 1)
      .slice(0, 2)
      .reduce((a, b) => a + b);

    return arr;
  }
}

module.exports = sumOfTwoMinElenents;
