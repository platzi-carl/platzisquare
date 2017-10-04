# PlatziSquare
[Demo Online](https://gpolanco-plazisquare.firebaseapp.com/)

Hola, este es el resultado de la practica realizada durante el curso de **Angular 4** en [platzi.com](https://platzi.com/cursos/angular/)

No está finalizada, pero me ha servido para aprender lo necesario para crear una aplicación real.

### Estructura de la aplicación
He utilizado módulos para organizar la aplicación y cargarlos utilizando lazy loading. 
```bash
admin
  ├── admin-routing.module.ts
  ├── admin.component.ts
  ├── admin.module.ts
  ├── components
  └── services
core
  ├── models
  ├── services
  ├── components
  └── core.module.ts
layout
  ├── main-content
  ├── main-footer
  ├── main-header
  ├── layout.component.ts
  └── layout.module.ts
lugares
  ├── components
  ├── models
  ├── services
  ├── lugares.component.ts
  └── lugares.module.ts
shared
  ├── components
  ├── models
  ├── services
  └── shared.module.ts
  
├── app.component.html
├── app.component.ts
├── app.module.ts
```

### Poner en Marcha
Para poner en marcha la aplicación sigue los siguientes pasos:

* 1 Clona el repositorio: `git clone https://github.com/gpolanco/platzisquare.git`
* 2 Edita el archivo `/src/environments/environment.ts` y completa el objeto de configuración de **firebase**.
* 3 Instala las dependencias `npm install`
* 4 Ejecutar la aplicación `ng server`

### Detalle sobre la estructura de módulos
Si quieres saber más sobre la [estructura basada en módulos](https://www.gpolanco.com/configurar-aplicacion-angular-4-basada-modulo/) de una aplicación angular, puedes revisar [este tutorial](https://www.gpolanco.com/configurar-aplicacion-angular-4-basada-modulo/).

Espero viendo el código, te aclare algunas dudas si las tienes.


### =====================================================================
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
