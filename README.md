### Servidor de desarrollo
Para ejecutar una version local del proyecto, ejecute  `ng serve` en la carpeta contenedora y navegue a `http://localhost:4200/`

## Esctructura. 

Proyecto desarrollado con Angular 12. 
 en la ruta `/src/app/components` se encuentran los componentes necesarios para el funcionamiento de la aplicación.
 Para cada componente se genera un arhivo .ts que incluye la funcionanilidad, un archivo .html con la maquetación y un .css como hoja de estilos independiente.
 1-Barra: Es la barra de busqueda, componente que se incluye en los demas para que siempre este visible. 
 2-detalle: Componente que contiene la vista detallada de un producto.
 3-item: contiene la información de cada item que se usara para mostrar el listado de los resultados de la busqueda.
 4-list: Contiene la vista de el listado de elementos buscados. 
 5-main: vista inicial, donde solo se incluye la barra de busqueda.

En la ruta `/src/app/services` se encuentra creado el servicio "api.service" el cual nos brinda las funciones necesarias para obtener los datos de la API proporcionada por mercalibre, este servicio es consumido en los componentes anteriormente mencionados. 


En el archivo `/src/app/app-routing.module.ts` se encuentra la programación de las rutas de la aplicación, para que podamos acceder a cada una de las vistas de manera individual. 
