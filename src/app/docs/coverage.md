

# Coverage

Nos dira que lineas del codigo no fueron ejecutadas

``ng test --no-watch --code-coverage``
Al finalizar las pruebas terminara la escucha y genera nuestro reporte en el Coverage summary en formato HTML que lo deja en el proyecto dentro de la carpeta coverage/testing-services/index.html

- con fdescribe -> ejecuta únicamente el suite de test // f de Focus
- con xdescribe -> se omite el suite de test
- con fit -> ejecuta el focus sobre un test
- con xit -> se omite un test

## Forzar error

Puedo forzar a que de un error si no hay un minimo de cobertura, por ejemplo minimo 80%

en el file ``Karma.conf.js`` dentro de coverageReporter, al final 


``check: {
        global: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90
        }
      }``
