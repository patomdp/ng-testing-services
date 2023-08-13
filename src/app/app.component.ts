import { Component } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-services';

  ngOnInit() {
    const calculator = new Calculator();
    let calculatorTest = calculator.interestCalculator(345251, 81.8);
    console.log('Monto $345251', 'interes: % 81.8');
    console.log('Ganancias', '$' + calculatorTest);
  }
}
