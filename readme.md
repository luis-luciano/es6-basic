# Learning ES6
El uso de éste repositorio tiene como objetivo aprender ES6.

Recursos utilizados
* Node.js
* NPM
* [Babel](https://babeljs.io/docs/en/usage#overview)
* [Webpack](https://webpack.js.org/)

## Instalación
```bash
$ npm install
```

## Comandos definidos
Se definen comandos para facilitar el uso de herramientas a través de paquetes npm. Éstos se definen dentro del archivo **package.json** en la carpeta principal del proyecto.
```json
{
    "scripts":{
    	"build": "webpack",
  	    "build-babel": "babel src -d output --watch"
    }
}
```
**npm run build**
Comando para generar modulos y elementos a través de Webpack  
**npm run build-babel**  
Generar archivos de Ecmascript 6 a javascript tradicional y compatible por la mayoria de los navegadores.  
Se especifica la carpeta de origen, en este caso es **src**.
Para definir la salida de archivos compilados se utiliza **-d** seguido del nombre de la carpeta destino, en éste caso es  **output**.
Se utiliza la bandera **--watch** para que la compilación de archivos se realice automaticamente.
