### TestBed + Spies

Le vamos a decir que valueService sea una dependencia explicita que vamos a espiar
let valueServiceSpy: jasmine.SpyObj<ValueService>

ahora le digo al modulo que en lugar de resolver la dependencia real, resuelva la del spy

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
