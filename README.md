## Correr aplicación
Antes de empezar a usar la aplicación, se debe correr este comando: `npm install`
<br>

Una vez se haya hecho esto, se puede iniciar la app: `npm start`
<br>

Si llega a haber error por paquetes, intentar correr los siguientes comandos:

- `npm install react-bootstrap bootstrap`
- `npm install react-router-dom`
- `npm install react-intl`
<br>

Con la app corriendo, ingresar a la siguiente ruta: [http://localhost:3000/login](http://localhost:3000/login)

## Proceso de desarrollo
Para desarrollo de la aplicación, primero se identificaron las vistas necesarias. Estas son 3 (login, home y detalles). Siendo así, se crea un componente para cada vista. Para el componente de login, como hay 2 subvistas (correo y constraseña), se tomó la decisión de trabajar con booleanos para definir si se está en modo correo y modo contraseña. En este mismo componente se realizan las verificaciones (usando expresiones regulares) mientras el usuario escribe y cuando presiona 'Siguiente'. Cuando tanto el correo como la contraseña sean validados, se loggea en la consola los valores ingresados en el formulario + el rol de usuario aleatorio (pseudo-POST). Es importante mencionar que este componente es hijo de App, quien realiza el fetch de los datos. Estos datos luego son pasados como props a tanto el componente de login como de detalles. Entonces, una vez el usuario ingresa, lo que se muestra es el componente de home. Aquí solamente se hizo un mappeo de los datos, y se mostraron como tarjetas (usando flex y flex-wrap para que se vean más organizados). También se definió que estas tarjetas fueran clickleables, para que permitan la navegación hacia el componente de detalles. Ya en la vista de detalles, a partir de los props recibidos desde App (datos y rol de usuario), primero se busca el carro que coincida con el modelo seleccionado. Una vez se encuentra, se desplegan los detalles como una tabla. Esta tabla, similar a las subvistas del login, maneja el rol de usuario como booleano para decidir si los detalles son editables o no.

## Componentes
- App -> Hace el fetch de los datos (GET), define un rol de usuario aleatorio, y define las rutas.
- Access -> Realiza el login del usuario, verifica que los campos cumplan las condiciones y hace un POST.
- Cars -> Muestra las tarjetas de todos los carros y algunos detalles sobre ellos.
- Car -> Muestra los detalles de un carro. Estos detalles son editables si el rol de usuario lo permite.

## Elementos React
Los elementos de React usados fueron:
- Route -> Utilizado para definir las rutas (/login, /home, /home/:carModel)
- Form -> Utilizado para definir los formularios de correo y contraseña.
- FormattedMessage -> Utilizado para la i18n.
- Card -> Utilizado para las tarjetas de carros de la página vista /home.
- Col -> Importando desde Bootstrap, utilizado para definir columnas.

## i18n:

La app cambia el idioma atomáticamente (entre EN y ES) dependiendo del idioma del navegador. Si se está usando Chrome, ir a preferencias -> idiomas y mover inglés o español al principio de la pila. Si por alguna razón la app no puede reconocer el idioma, se selecciona automáticamente inglés.

## Vistas (EN)
### Login - Correo
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 49 01" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/520aa88b-220b-4a02-b1f8-4321cc3200ef">

### Login - Contraseña
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 49 10" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/3460c7e9-006f-456a-bf08-2fc6b79b92dd">

### Home
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 58 54" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/a2747ea8-3687-44a6-9d15-e7d7ebf7b41f">


### Detalles carro - Admin
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 49 40" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/e85f1f0e-d8e3-4213-80db-700853fe0b46">

### Detalles carro - Usuario
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 54 38" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/7104eca8-9d68-4281-a1ca-2f4c8a9ab1de">
