import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  private value = 'my value';

  constructor() {}

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }

  getPromiseValue() {
    return Promise.resolve('promise value');
  }

  // getObservableValue(){
  //   return of(this.value);
  // }
  getObservableValue(){
    return of('value');
  }
}
