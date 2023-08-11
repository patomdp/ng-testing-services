// import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ValueService);
  // });

  beforeEach(() => {
    // Primero crear una instancia de ese servicio, aqui, asi se repite en todos los it
    service = new ValueService();
  });

  // Una de las pruebas va a ser tener la instancia de la clase y ver si se creo de forma exitosa
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for #getValue', () => {
    // La responsabilidad de getValue simplemente es retornar lo que haya en value
    // AAA
    // Arrange: necesitamos la instancia, pero ya esta en el beforeEach
    // Act:
    it('Should return "my value"', () => {
      // el valor inicial
      expect(service.getValue()).toBe('my value');
    });
    // Assert:
  });
  describe('Tests for #setValue', () => {
    // La responsabilidad de setValue es settear el value que se pase
    it('Should change the value "my value" to "mi valor"', () => {
      // el valor inicial
      expect(service.getValue()).toBe('my value');
      // se setea otro valor
      service.setValue('mi valor');
      // comprobar que haya cambiado
      expect(service.getValue()).toBe('mi valor');
    });
  });
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
});
