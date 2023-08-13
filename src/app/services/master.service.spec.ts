import { FakeValueService } from './fake-value-service';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

import { TestBed } from '@angular/core/testing';


fdescribe('MasterService', () => {
  it('should return my value from the real service', () => {
    // Construimos una instancia de Value Service
    const valueService = new ValueService();
    // Construimos una instancia de MasterService y le mandamos la dependencia
    const masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('my value');
  });
  it('should return "other value" from a Fake Service',() => {
    // Esto es una manera con un Fake Service como cascaron, cuesta mas manteniento
    // Al fake no le interesa si los metodos tienne 10 lineas de codigo, por que se encarga el spec de su
    // propio servicio de resolver el test dentro de ese scope
    // hay una prueba unitaria especifica para ese servicio
    // No nos interesa que valueService funcione, sino que master service ejecute
    const fakeValueService = new FakeValueService();
    // Forzamos el tipado 
    const masterService = new MasterService(fakeValueService as unknown as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });
  it('should return "fake from object" from a Fake Object',() => {
    
    const fake = { getValue: () => 'fake from object' };
    console.log('Fake getValue:',fake.getValue());
    // Forzamos el tipado 
    const masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake from object');
  });
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

});
