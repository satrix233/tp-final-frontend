import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';

export const Sidebar = () => {
  const { contactos } = useContext(ChatContext);
  const [busqueda, setBusqueda] = useState(''); // Estado para el buscador

  // Filtramos la lista según lo que el usuario escriba
  const contactosFiltrados = contactos.filter(contacto => 
    contacto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="avatar-circle">👤</div>
        <span className="mi-perfil">Mi Perfil</span>
      </div>
      
      {/* Buscador */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar un chat..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="contact-list">
        {contactosFiltrados.map(contacto => (
          <Link key={contacto.id} to={`/chat?contacto=${contacto.id}`} className="contact-item">
            <div className="avatar-circle">{contacto.avatar}</div>
            <div className="contact-info">
              <span className="contact-name">{contacto.nombre}</span>
            </div>
          </Link>
        ))}
        {contactosFiltrados.length === 0 && <p className="no-results">No hay contactos con ese nombre</p>}
      </div>
    </div>
  );
};