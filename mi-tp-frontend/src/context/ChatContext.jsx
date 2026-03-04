import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contactos] = useState([
    { id: 'rey', nombre: 'Rey Whatsappito', avatar: '👑' },
    { id: 'cochi', nombre: 'Cochi', avatar: '🐷' },
    { id: 'ivo', nombre: 'Ivo', avatar: '😎' },
    { id: 'brunini', nombre: 'Brunini Watsapini', avatar: '📱' }
  ]);

  const [mensajes, setMensajes] = useState({
    rey: [{ id: 1, emisor: 'rey', texto: '¡Hola! ¿Cómo va el TP?', hora: '10:00' }],
    cochi: [{ id: 2, emisor: 'cochi', texto: 'Oink! ¿Ya armaste el HTML?', hora: '10:15' }],
    ivo: [{ id: 3, emisor: 'ivo', texto: 'Sale unas partidas después de programar.', hora: '11:00' }],
    brunini: [{ id: 4, emisor: 'brunini', texto: 'Pasame el repo cuando termines.', hora: '11:30' }]
  });

  const enviarMensaje = (contactoId, texto) => {
    const nuevoMensaje = {
      id: Date.now(),
      emisor: 'yo',
      texto,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMensajes(prev => ({
      ...prev,
      [contactoId]: [...(prev[contactoId] || []), nuevoMensaje]
    }));
  };

  return (
    <ChatContext.Provider value={{ contactos, mensajes, enviarMensaje }}>
      {children}
    </ChatContext.Provider>
  );
};