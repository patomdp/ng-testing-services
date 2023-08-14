# Product Service Http

Vamos a integrar al proyecto un servicio con una llamada a una API para ir haciendo pruebas

Se va a tomar un servicio que se hizo para el curso de Angular Router

link : 
[GH](https://github.com/platzi/Angular-router)
[Swagger](https://api.escuelajs.co/docs/)

Ir a la rama de production> src> services
Y copiar tambien los modelos

la ruta sera src/app/models/

- auth.model.ts
- category
- files
- product
- user

Creamos un environment

> ng generate environments
Link > 
[Angular Build](https://angular.io/guide/build)


export const environment = {
  production: false,
  API_URL: 'https://api.escuelajs.co',
};

[Ver los docs](https://api.escuelajs.co/docs/) para ver los docs

Si quiero traer productos por ejemplo

[Ver productos](https://api.escuelajs.co/api/v1/products)

{
    "id": 226,
    "title": "Regular Fit ",
    "price": 280,
    "description": "description",
    "images": [
        "https://dfcdn.defacto.com.tr/7/Y2903AZ_23SM_BE509_02_04.jpg"
    ],
    "creationAt": "2023-08-13T17:43:05.000Z",
    "updatedAt": "2023-08-14T05:41:15.000Z",
    "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://picsum.photos/640/640?r=6374",
        "creationAt": "2023-08-13T17:29:07.000Z",
        "updatedAt": "2023-08-13T17:29:07.000Z"
    }
},

====

Configurar en ambos entornos, el de produccion y el de testeo

Ej: environment.prod.ts

export const environment = {
    production: true,
    API_URL: 'https://api.escuelajs.co',
  };


Para hacer request Angular utiliza un modulo a parte, asi que hay que importarlo en los modules

Agregamos los modulos de http y el de reactive forms

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

Los metemos en el array de imports

para traernos cualquier otro modulo utilizamos los puntitos, no la ruta de src

> import { Product } from './../../models/product.model';

> import { Product } from 'src/app/models/product.model';

En el html podemos agregarle el for

<figure *ngFor="let product of products">
      <img
        [src]="product.images[0]"
        [alt]="product.description"
      />
      <figcaption>
          {{ product.title }} -  {{ product.price }}
      </figcaption>    
</figure>

Si vamos a Network para ver la peticion
Tanto en headers como en Preview