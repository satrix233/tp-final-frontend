import { useContext, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';
import { Sidebar } from '../components/sidebar';

export const Chat = () => {
  const [searchParams] = useSearchParams();
  const contactoId = searchParams.get('contacto');
  const { contactos, mensajes, enviarMensaje } = useContext(ChatContext);
  const [texto, setTexto] = useState('');

  const contactoActual = contactos.find(c => c.id === contactoId);
  const historial = mensajes[contactoId] || [];

  if (!contactoActual) return <Navigate to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    enviarMensaje(contactoId, texto);
    setTexto(''); 
  };

  return (
    <>
      <Sidebar /> 
      
      <div className="main-area">
        {/* CABECERA ACTUALIZADA CON BOTONES */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="avatar-circle">{contactoActual.avatar}</div>
            <h2>{contactoActual.nombre}</h2>
          </div>
          
          <div className="chat-header-actions">
            <button className="icon-button" title="Videollamada">🎥</button>
            <button className="icon-button" title="Llamada">📞</button>
            <button className="icon-button" title="Buscar">🔍</button>
            <button className="icon-button" title="Opciones">⋮</button>
          </div>
        </div>
        {/* FIN CABECERA */}
        
        <div className="chat-window">
          {historial.map(msg => (
            <div key={msg.id} className={`bubble ${msg.emisor === 'yo' ? 'sent' : 'received'}`}>
              <p>{msg.texto}</p>
              <span className="time">{msg.hora}</span>
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <button type="button" className="icon-button form-icon" title="Adjuntar">📎</button>
          <input 
            type="text" 
            value={texto} 
            onChange={(e) => setTexto(e.target.value)} 
            placeholder="Escribe un mensaje aquí..." 
          />
          <button type="submit" className="send-button">➤</button>
        </form>
      </div>
    </>
  );
};