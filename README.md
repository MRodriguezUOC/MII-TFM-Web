# MII-TFM-Web
Este proyecto forma parte del Trabajo de Fin de Master del Master en Ingeniería Informática de la UOC.  

Se puede visitar la web en:  
https://iasrevenge.retrobytes.es  

## General
Esta página web está hecha con Angular.  
Se ha dockerizado tanto para su ejecución como para su desarrollo.  

## Configuración previa
Crear un fichero .env con el siguiente contenido:  
```
INAME=angular-devenv  
NODE_VERSION=25-alpine  
NODE_DEVENV_VERSION=25-trixie  
UNAME=marco  
```

## Ejecutar en local
```bash
docker compose up app-prod  
```
Para ver la web conectarse a:  
http://localhost:8080  

## Entrar en el entorno de desarrollador
Ejecutar  
```bash
./startdevenv
```
Se entra en un contenedor donte está instalado Angular y vim.  

Para lanzar la app en modo depuración, ejecutar en otro terminal:  
```bash
./startdevenv server
```
Para ver la web conectarse a:  
http://localhost:4200  
Para ver los logs, en otro terminal ejecutar:  
```bash
./startdevenv logs
```

## Añadir ejecutale del juego
Para que los enlaces de ejecución del juego funcionen, hay que copiar  
el contenido del proyecto game a la carpeta /public/game  
Por ejemplo:  
```bash
cp -r game/html/build/dist web/public/game
```

# IAsRevenge

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
