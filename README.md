# odin-recipes
# TP Final Frontend - Clon de WhatsApp Web

## Descripción del Proyecto
Este proyecto es una Single Page Application (SPA) desarrollada en React que simula la interfaz y funcionalidad básica de WhatsApp Web de escritorio. Permite al usuario navegar entre una lista de contactos y simular el envío de mensajes. 

## Librerías y Tecnologías Usadas
* **React (Vite):** Framework principal para la construcción de interfaces mediante componentes.
* **react-router-dom:** Utilizado para el enrutamiento entre la pantalla de bienvenida (`/`) y las ventanas de conversación (`/chat`), aprovechando el hook `useSearchParams` para identificar qué chat abrir.
* **Context API:** Implementado de forma nativa en React para manejar el estado global de los contactos y el historial de mensajes sin necesidad de hacer *prop drilling*.
* **CSS Puro:** Estilos responsivos (320px a 2000px), animaciones de carga y transiciones de UI cuidando los estándares de accesibilidad visual (alto contraste).

