# Servicios con depdendencias

El concepto importante en los servicios es la inyeccion de dependencias

Podemos inyectar a un componente, a un pipe, a una directiva, etc.

Cuando tenemos estos casos en los que un componente depende de otro, un servicio depende de otro.

Testear servicios con dependencias

Creamos un nuevo servicio

> ng g s services/master

se inyecta en el constructor(), creando un patron singleton que se comparte con toda la app

``constructor(
    private valueService: ValueService
  ) { }

  getValue(): string{
    return this.valueService.getValue();
}``

Seguimos borrando el TestBed, para no tenerlo a Angular como ayuda

describe('MasterService', () => {
  it('should return my value from the real service', () => {
    // Construimos una instancia de Value Service
    let valueService = new ValueService();
    // Construimos una instancia de MasterService y le mandamos la dependencia
    let masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('my value');
  });
});

---

La responsabilidad getValue en Value Service es retornar un valor
Retornar un valor privado

getValue() {
    return this.value;
}

mientras que la responsabilidad de getValue en MasterService es conectarse y ejecutar el getValue de Value Service
Es decir llamar al metodo que esta dentro de la instancia, dentro de su dependencia

// En Master Service
getValue() {
    return this.valueService.getValue();
}

Parece lo mismo, pero no es lo mismo, por que las responsabilidades son distintas

Nosotros no necesitamos hacer pruebas a getValue por que ya tiene sus tests, tenemos que hacer pruebas de la coneccion y ejecucion

===

Para los servicios con dependencias vamos a mockear la respuesta del servicio

Una manera es clonar el servicio, haciendote un value-service-fake.ts

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
  })

===

Otra manera de hacerlo es como objeto de JS que funcionan casi como clases

De esta manera no consumimos creditos de API key dentro de un servicio real por ejemplo, ni tampoco tenemos que testear lineas de codigo que no sean la responsabilidad del test
podría verse como un ataque de DNS y cancelar tus servicios.

  it('should return "fake from object" from a Fake Object',() => {
    
    const fake = { getValue: () => 'fake from object' };
    console.log('Fake getValue:',fake.getValue());
    // Forzamos el tipado 
    const masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake from object');
  })


  Para MasterService fue lo mismo enviarle un servicio real, una clase de objeto o un fake