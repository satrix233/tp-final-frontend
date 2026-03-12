# odin-recipes
# TP Final Frontend - Clon de WhatsApp Web

## Descripción del Proyecto
Este proyecto es una Single Page Application (SPA) desarrollada en React que simula la interfaz y funcionalidad básica de WhatsApp Web de escritorio. Permite al usuario navegar entre una lista de contactos y simular el envío de mensajes. 

## Librerías y Tecnologías Usadas
* **React (Vite):** Framework principal para la construcción de interfaces mediante componentes.
* **react-router-dom:** Utilizado para el enrutamiento entre la pantalla de bienvenida (`/`) y las ventanas de conversación (`/chat`), aprovechando el hook `useSearchParams` para identificar qué chat abrir.
* **Context API:** Implementado de forma nativa en React para manejar el estado global de los contactos y el historial de mensajes sin necesidad de hacer *prop drilling*.
* **CSS Puro:** Estilos responsivos (320px a 2000px), animaciones de carga y transiciones de UI cuidando los estándares de accesibilidad visual (alto contraste).

## Dificultades Presentadas y Soluciones
1. **Sincronización de Rutas:** Al principio hubo un conflicto estricto con el *Case Sensitivity* (mayúsculas/minúsculas) de React al importar los componentes de las páginas, lo cual se solucionó estandarizando los nombres de los archivos (`Home.jsx`).
2. **Despliegue en Vercel:** Para evitar el error 404 al recargar la página en producción usando React Router, fue necesario agregar un archivo de configuración `vercel.json` con reglas de reescritura (*rewrites*) apuntando al `index.html`.
3. **Estructura DRY:** Se refactorizó la barra de contactos a un componente independiente (`Sidebar.jsx`) para no repetir el código tanto en la vista de inicio como en la del chat, cumpliendo con los principios de diseño.
