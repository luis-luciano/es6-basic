// El uso de import con {} debe respetar los nombres del modulo
import { showAlert } from './modules/showAlert';

// El uso de import sin {} se está realizando un export default el cual puede ser utilizado con cualquier nombre
// en este caso en vez de utilizar Person => Persona
import Persona from './modules/Person';

showAlert('Hello World Module');

const persona = new Persona('Luis Luciano', 27);
persona.showInfo();
