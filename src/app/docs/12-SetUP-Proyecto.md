### Setup y maquetacion del proyecto

Vamos a hacer testings de peticiones HTTP de lo que enviemos
Como FE vamos a hacer conexiones a las API de BE
Vamos a instalar un framework minimo de CSS

Classless/

https://milligram.io/
https://simplecss.org/
https://picocss.com/

Son pensados para proyectos semanticos, sin pensar en clases, tailwind, angular material, etc.
Todo ya viene predefinido con 

Vamos a usar Pico
> >npm i @picocss/pico

https://www.npmjs.com/package/@picocss/pico

### Para implementar

Vamos al archivo angular.json

y cambiamos el style

"styles": [
              "src/styles.scss"
            ],

Hay que agregar el paquete que nos hayan instalado en Node.modules

y copiamos la ruta relativa

"node_modules\@picocss\pico\css\pico.min.css"
  "node_modules/@picocss/pico/scss/pico.scss",



Ojo con los backspaces

            "styles": [
              "src/styles.scss",
              "node_modules/@picocss/pico/css/pico.min.css"
            ],

Lo tuve que instalar por CDN por que no funcionaban las otras opciones

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">

En el index.html dentro del head

Para decirle que siempre sea light por ejemplo

<html lang="en" data-theme="light"> 

====

Ahora creamos componentes
> ng g c components/products
> ng g c components/pico-preview



### Importamos
cambiamos a routerLink en el app.component.html
Importamos los componentes que creamos en el app-routing.module


import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';

const routes: Routes = [
  {
    path: 'products', 
    component: ProductsComponent
  },
  {
    path: 'pico-preview',
    component: PicoPreviewComponent
  }
];