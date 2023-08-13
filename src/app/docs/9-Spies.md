### Spies

Enviamos un servicio Fake, como lo podemos mejorar con los espias?

Solo nos importa que llame al metodo y que lo ejecute, no que el metodo funcione

No me interesa el return, sino si dentro de ese servicio se llamo el metodo

  // Prueba para saber si ejecutamos el metodo
  it('should call the method #getValue() from valueService',() => {
    // mock del getValue service pero con spy
    // Creamos un spy de nuestro mock, y le pasamos el nombre del mock y el metodo getValue
    // y un array por que pueden ir varios metodos
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    // mockeamos el retorno
    valueServiceSpy.getValue.and.returnValue('fake value');
    // instancia de master service pasandole el valueServiceSpy
    const masterService = new MasterService(valueServiceSpy);
    // comprobamos el retorno con ()
    expect(masterService.getValue()).toBe('fake value');
    // comprobar que se llame el metodo
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    // comprobar que se llame el metodo una vez
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });


## Mocking

> "Son objetos simulados (pseudo-obetos, mock object, objetos de pega) a los objetos que imitan el comportamiento de objetos reales de una forma controlada"

## Ejemplo con JEST

	let mockHeroService = { getHeros: jest.fn().mockReturnValue(...), ... };


    describe('MasterService', () => {
  it('should call the method getValue() from valueService', () => {
    const valueServiceSpy = jest.spyOn(require('./ValueService'), 'ValueService');
    // mockeamos el retorno
    valueServiceSpy.getValue.mockReturnValue('fake value');
    // instancia de master service pasandole el valueServiceSpy
    const masterService = new MasterService(valueServiceSpy);
    // comprobamos el retorno con ()
    expect(masterService.getValue()).toBe('fake value');
    // comprobar que se llame el metodo
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    // comprobar que se llame el metodo una vez
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});