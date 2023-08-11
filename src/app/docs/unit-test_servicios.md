
# Unit Testing en Servicios
Generamos un servicio

> ng g s services/value

En los archivos de spec.ts hay varios conceptos interesantes

- TestBed
- configureTestingModule({})

Agregamos algunas cosas al valueService

``export class ValueService {
  private value = 'my value';

  constructor() {}

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }
}``

``
  getPromiseValue() {
    return Promise.resolve('value');
  }

// import { of } from 'rxjs';
  getObservableValue(){
    return of('value');
  }
``

----

Esto ya va a dar error
``
  // Una de las pruebas va a ser tener la instancia de la clase y ver si se creo de forma exitosa
  it('should be created', () => {
    expect(service).toBeTruthy();
  });``

Cada escenario de prueba deberia manejarse de forma isolada, es decir que una prueba no deberia interferir con otras pruebas
Cada vez que creamos una prueba tenemos que crear una instancia de ese servicio. Entonces le tenemos que agregar la instancia del servicio.

  ``it('should be created', () => {
    // Primero crear una instancia de ese servicio
    service = new ValueService;
    expect(service).toBeTruthy();
  });``

## BeforeEach

Esto va a hacer un bloque de codigo antes de cada it, por ejemplo, si tengo que crear una instancia del service = new ValueService; en cada una de las pruebas.
En vez de ponerlo cada vez, lo ponemos en el beforeEach()

### Como regla general:

Deberia tener mas de una prueba para cada metodo
Luego probar cuando falla, cuando no, etc.