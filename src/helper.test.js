const sumOfTwoMinElenents = require('./helper');

test('test empty array', () => {
  const sorted = sumOfTwoMinElenents([]);

  expect(sorted).toBe('Введите корректные данные');
});

describe('helper', () => {
  test('falsy results', () => {
    const sortedEmpty = sumOfTwoMinElenents([]);
    const sortedString = sumOfTwoMinElenents('');
    const sortedNull = sumOfTwoMinElenents([null, 'ff']);

    expect(sortedEmpty).toBe('Введите корректные данные');
    expect(sortedString).toBe('Введите корректные данные');
    expect(sortedNull).toBe('Введите корректные данные');
  });

  test('true results', () => {
    const sorted = sumOfTwoMinElenents([5, 2, -1, 10]);

    expect(sorted).toEqual([-1, 2, 5, 10]);
  });
});
