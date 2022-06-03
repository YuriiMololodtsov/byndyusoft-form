const sumOfTwoMinElenents = require('./src/helper');

test('test empty array', () => {
  const sorted = sumOfTwoMinElenents([]);

  expect(sorted).toBe('Введите корректные данные');
});
