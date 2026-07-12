const { greet } = require('../src/index.js');

describe('Greet Function', () => {
  test('should return welcome message', () => {
    expect(greet('John')).toBe('Welcome, John!');
  });

  test('should work with different names', () => {
    expect(greet('Alice')).toBe('Welcome, Alice!');
  });
});
