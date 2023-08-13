export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | null {
    if (b === 0) {
      return null;
    }
    return a / b;
  }

  // calcula el interes a partir del monto inicial y el porcentaje de interes
  interestCalculator(montoInicial: number, interes: number): number {
    const interesCalculado = montoInicial * (interes / 100);
    const interesMensual = this.earningsCalculator(interesCalculado, 365);
    const interesAnual = this.earningsCalculator(interesCalculado, 12);
    console.log('interesMensual: €' + Math.round(interesMensual));
    console.log('interesAnual: €' + Math.round(interesAnual));
    return Math.round(interesCalculado);
  }

  earningsCalculator(gananciaAnual: number, plazo: number): number {
    const calculatedEarnings = gananciaAnual / plazo;
    return calculatedEarnings;
  }


}
