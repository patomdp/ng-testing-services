export class FakeValueService {
  private value = 'my value';

  constructor() {}

  getValue(): string {
    return 'fake value';
  }

  setValue(value: string): void {

  }

  getPromiseValue() {
    return Promise.resolve('fake promise value');
  }


}
