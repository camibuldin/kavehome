# Kave Home - Prueba Técnica


**Kave Home** es un proyecto web de comercio electrónico que ofrece una amplia variedad de productos de muebles y decoración. Este repositorio fue creado como parte de una prueba técnica para demostrar habilidades en desarrollo web y diseño accesible.


### Objetivo

El objetivo de esta prueba técnica es **diseñar e implementar el siguiente portal**, siguiendo las directrices proporcionadas por el equipo de UX en Figma.

- **Figma:** [Kave Challenge](https://www.figma.com/file/KfDdY1c32OaOTT20GuzvCR/Front-Challenge-2024?type=design&node-id=0-1&mode=design&t=24SXgmGP2BeSDqKB-0)


### Características

- Productos destacados y categorías.
- Listas de favoritos para los usuarios.
- Accesibilidad mejorada con etiquetas ARIA.
- Diseño responsivo y amigable.

## Capturas de Pantalla

### Página Principal
<div>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/homepage.png" alt="Página Principal" width="250px"/>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/homepage1.png" alt="Página Principal 1" width="250px"/>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/homepage2.png" alt="Página Principal 2" width="250px"/>
</div>

### Página de Detalles del Producto
<div>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/detailspage.png" alt="Página de Detalles del Producto" width="250px"/>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/detailspage1.png" alt="Página de Detalles del Producto 1" width="250px"/>
</div>


### Lista de Favoritos
<div>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/favpage.png" alt="Lista de Favoritos" width="250px"/>
  <img src="https://github.com/camibuldin/kavehome/blob/main/public/favpage1.png" alt="Lista de Favoritos 1" width="250px"/>
</div>


## Instalación y Configuración

### Prerrequisitos

Asegúrate de tener Node.js y npm instalados en tu sistema.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Instrucciones

1. Clona el repositorio:

    ```bash
    git clone https://github.com/camibuldin/kavehome.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd kavehome
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

5. Abre el navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Uso

### Lista de Favoritos

- Para añadir un producto a la lista de favoritos, haz clic en el icono del corazón en la tarjeta del producto.
- Para eliminar un producto de la lista de favoritos, haz clic de nuevo en el icono del corazón.

### Accesibilidad

La aplicación incluye etiquetas ARIA para mejorar la accesibilidad y la experiencia de los usuarios con discapacidades. 

## Estructura del Proyecto

- **`/app`:** Contiene los componentes principales del proyecto.
- **`/public`:** Archivos públicos como imágenes y estilos.
- **`/styles`:** Archivos de estilos CSS y módulos.

### Principales Componentes

- **`layout.tsx`:** Componente de diseño global que incluye el encabezado y pie de página.
- **`page.tsx`:** Página principal que muestra los productos destacados.
- **`favoritos.tsx`:** Lista de productos favoritos del usuario.
- **`productos.tsx`:** Página que muestra todos los productos disponibles.
- **`details/[id].tsx`:** Página de detalles de un producto específico.

### Agradecimientos y Reflexión
Disfruté mucho desarrollando este proyecto para Kave Home. Fue un reto divertido e interesante que me permitió aprender y aplicar nuevas habilidades en Next.js, accesibilidad y diseño responsivo.