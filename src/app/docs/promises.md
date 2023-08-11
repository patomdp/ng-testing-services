### Promises

Hay dos maneras de hacerlo con promesas

  describe('Tests for #getPromiseValue', () => {
    // La responsabilidad 
    // es obtener la promesa resuelta con un valor
    // getPromiseValue() {
    //   return Promise.resolve('value');
    // }
    it('Should get a resolved "promise value" from a Promise with then ', (doneFn) => {
      // el valor inicial
      service.getPromiseValue()
      .then((value) => {
        // Respuesta de la promesa
        // Assert
        expect(value).toBe('promise value');
        // Se le agrega el doneFn para los callbacks, sino da error
        doneFn();
      });
    });
    it('Should get a resolved "promise value" from a Promise with async ', async () => {
      const response = await service.getPromiseValue();
      expect(response).toBe('promise value');
    });
  });