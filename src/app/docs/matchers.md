# Matchers

La idea es poder cubrir la mayor cantidad de escenarios

- Mas en [Jasmine Matchers GitHub][1]
[1]: https://jasmine.github.io/api/edge/matchers.html

//Comunes
.toBe();
.not.toBe();
.toEqual();

//Veracidad
.toBeNull()
.toBeUndefined()
.toBeDefined()
.toBeUndefined()
.toBeTruthy() 
.toBeFalsy() 

//Numeros
.toBeGreaterThan(3);
.toBeGreaterThanOrEqual(3.5);
.toBeLessThan(5);
.toBeLessThanOrEqual(4.5);

//Numeros decimales
expect(0.3).toBeCloseTo(0.3)

//Strings
.not.toMatch(/I/);
.toMatch(/stop/);

//Arrays
.toContain('milk');

//Ecepciones
myfunction.toThrow(Error);