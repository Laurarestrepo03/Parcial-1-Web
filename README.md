## Correr aplicación
Antes de empezar a usar la aplicación, se debe correr este comando: `npm install`
<br>

Una vez se haya hecho esto, se puede iniciar la app: `npm start`
<br>

Si llega a haber un error por paquetes, intentar correr los siguientes comandos:

- `npm install react-bootstrap bootstrap`
- `npm install react-router-dom`
- `npm install react-intl`

Con la app corriendo, ingresar a la siguiente ruta: [http://localhost:3000/login](http://localhost:3000/login)

## Proceso de desarrollo
Para el desarrollo de la aplicación, primero se identificaron las vistas necesarias; estas son 3: login, home y detalles. Siendo así, se crea un componente para cada vista. Para el componente de login, como hay 2 subvistas (correo y constraseña), se tomó la decisión de trabajar con booleanos para definir si se está en modo correo o modo contraseña. En este mismo componente se realizan las validaciones usando expresiones regulares. Cuando tanto el correo como la contraseña hayan sido validados, se loggea en la consola los valores ingresados en el formulario + un rol de usuario aleatorio (pseudo-POST). Es importante mencionar que este componente es hijo de App, quien define el rol y lo pasa como props a tanto el componente de login como de detalles. Una vez el usuario ingresa, lo que se muestra es el componente de home. Aquí se hace fetch a los datos y se mappean para ser mostrados tarjetas (usando flex y flex-wrap para que se vea más organizado). Estas tarjetas son clickleables para permitir la navegación hacia el componente de detalles. Ya en la vista de detalles, una vez se haya hecho fetch al carro seleccionado, se desplega la información como una tabla. Esta tabla, similar a las subvistas del login, maneja el rol de usuario como booleano (True = Admin) para definir si los detalles son editables o no.

## Componentes
- App -> Define un rol de usuario aleatorio y las rutas.
- Access (login) -> Realiza el login del usuario, verifica que los campos cumplan las condiciones y hace un POST.
- Cars (home) -> Hace fetch a todos los carros (GET) y se muestran como tarjetas.
- Car (detalles) -> Hace fetch a un carro (GET) y muestra sus detalles. Estos detalles son editables si el rol de usuario lo permite.

## Elementos React
Los elementos de React usados fueron:
- Route -> Utilizado para definir las rutas (/login, /home, /home/:carModel)
- Form -> Utilizado para definir los formularios de correo y contraseña.
- FormattedMessage -> Utilizado para la i18n.
- Card -> Utilizado para las tarjetas de carros de la vista /home.
- Col -> Importado desde Bootstrap, utilizado para definir columnas.

## i18n:
La app cambia el idioma atomáticamente (entre EN y ES) dependiendo del idioma del navegador. Si se está usando Chrome, ir a configuración -> idiomas y mover inglés o español al principio de la pila. Si por alguna razón la app no puede reconocer el idioma o se está en otro diferente a español o inglés, se selecciona automáticamente inglés.

## Vistas (EN)
### Login - Correo
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 49 01" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/520aa88b-220b-4a02-b1f8-4321cc3200ef">

### Login - Contraseña
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 49 10" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/3460c7e9-006f-456a-bf08-2fc6b79b92dd">

### Home
<img width="800" alt="Captura de pantalla 2023-09-28 a la(s) 13 58 54" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/a2747ea8-3687-44a6-9d15-e7d7ebf7b41f">

### Detalles carro - Admin
<img width="800" alt="Captura de pantalla 2023-09-29 a la(s) 17 14 03" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/ded088b9-0c49-4d3c-982e-412d6e4496d8">

### Detalles carro - Usuario
<img width="800" alt="Captura de pantalla 2023-09-29 a la(s) 17 12 12" src="https://github.com/Laurarestrepo03/Parcial-1-Web/assets/69609680/78eb7ff7-e233-400c-a29f-7099cb17770c">
