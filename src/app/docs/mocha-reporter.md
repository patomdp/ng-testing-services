# Mocha Reporter

Es un reporter adicional al que ya viene instalado con Karma y Jasmine, para poder ver que pruebas se estan ejecutando bien

``npm i karma-mocha-reporter --save-dev``

El ``--save-dev`` se utiliza para salvarlo como dependencia de desarrollo

``npm install karma-jasmine --save-dev``
``ng generate config karma``
Ahora en Karma.config.js

- More in [Karma Runner GitHub][1]

Ahora tenemos que ir al config y agregar el karma-mocha-reporter

``require('karma-mocha-reporter')``

y en reporters cambiamos esto
 ``reporters: ['progress', 'kjhtml'],``
 por esto
 ``reporters: ['mocha'],``

  [1]: https://karma-runner.github.io/latest/intro/installation.html

El Mocha Reporter y hacer encapsulacion de Describe nos ayuda a poder hacer foco en distintas partes con ``fdescribe``