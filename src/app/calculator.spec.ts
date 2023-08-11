import { Calculator } from './calculator';

// En multiply (3,3) deberia ser 3x3 === 9
// En divide(3,0) deberia ser null

// Describe es una sentencia que maneja Jasmine, Jest, etc
describe('Test for Calculator', () => {
  describe('Test for #multiply', () => {
    it('#multiply should return a nine', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const response = calculator.multiply(3, 3);
      // Assert
      expect(response).toEqual(9);
    });
    it('#multiply should return a four', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const response = calculator.multiply(1, 4);
      // Assert
      expect(response).toEqual(4);
    });
  });

  describe('Tests for #divide', () => {
    it('#divide should return null when divided by 0', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const response = calculator.divide(3, 0);
      // Assert
      expect(response).toBe(null);
    });
    it('#divide should return some numbers', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const response = calculator.divide(6, 3);
      const response2 = calculator.divide(5, 2);
      // Assert
      expect(response).toEqual(2);
      expect(response2).toEqual(2.5);
      expect(response2).not.toBe(null);
      expect(response2).not.toBeUndefined();
    });
    it('#divide for a zero', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const response = calculator.divide(6, 0);
      // Assert
      expect(response).toBe(null);
      expect(response).toBeNull();
      expect(calculator.divide(444522222, 0)).toBeNull();
    });
  });

  it('Testing Matchers', () => {
    // Arrange
    let name = 'patricio';
    let name2; // undefined
    let arrayTest = ['apples', 'oranges', 'pears'];
    // Act

    // Assert
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 2 === 3).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(name).toMatch(/pat/);

    // con array
    expect(arrayTest).toContain('oranges');
    expect(['pears', 'banana', 'kiwi', 'oranges']).toContain('oranges');
  });
});
