import { MasterService } from './master.service';
import { ValueService } from './value.service';

import { TestBed } from '@angular/core/testing';

// With Test Bed

fdescribe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    // creamos el spy con sus metodos y nombre
    const spy = jasmine.createSpyObj('ValueService', ['getValue']) ;

    // Crear el modulo
    TestBed.configureTestingModule({
      // inyecto el valueService
      // puedo inyectar componentes, routing, etc
      providers: [ 
        MasterService,
        // con esto le estoy diciendo que utilice el spy que creamos
        { provide: ValueService, useValue: spy }
      ]
    });
    // jalo el valueService de la testbed
    masterService = TestBed.inject(MasterService);
    // forzamos el tipado e inyectamos el servicio
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  }); 

  it('should be created',() => {
    expect(masterService).toBeTruthy();
  });

  it('should call the method #getValue() from valueService',() => {
    valueServiceSpy.getValue.and.returnValue('fake value');
    expect(masterService.getValue()).toBe('fake value');
    // comprobar que se llame el metodo
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
    // comprobar que se llame el metodo una vez
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });

});
