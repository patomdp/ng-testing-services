### Angular TestBed

para no tener que hacer todo de forma manual, podemos importar el TestBed desde el paquete de Angular

``import { TestBed } from '@angular/core/testing';``

Me va a ayudar a crear un modulo en el cual pueda meter todos los servicios, pipes, etc.

Por ejemplo, para correr la App tenemos un APPModule, APP routing, etc

En el caso de las pruebas vamos a generar este espacio para testear desde ahi

necesito que este modulo tenga un servicio, un componente, solo lo que estemos testeando

fdescribe('MasterService', () => {
  let service: ValueService;
  beforeEach(() => {
    // Crear el modulo
    TestBed.configureTestingModule({
      // inyecto el valueService
      // puedo inyectar componentes, routing, etc
      providers: [ ValueService]
    });
    // jalo el valueService de la testbed
    service = TestBed.inject(ValueService);
  }); 
});