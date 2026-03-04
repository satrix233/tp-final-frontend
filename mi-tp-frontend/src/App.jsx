import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Chat } from './pages/chat';
import './App.css';

function App() {
  const [progreso, setProgreso] = useState(0);
  const [cargando, setCargando] = useState(true);

  // Efecto para la animación de carga
  useEffect(() => {
    const intervalo = setInterval(() => {
      setProgreso(prev => {
        if (prev >= 100) {
          clearInterval(intervalo);
          setTimeout(() => setCargando(false), 600); // Pequeña pausa al llegar a 100%
          return 100;
        }
        return prev + 4; // Velocidad con la que suben los números
      });
    }, 50); 
    return () => clearInterval(intervalo);
  }, []);

  // Si está cargando, mostramos la pantalla de inicio tipo WhatsApp
  if (cargando) {
    return (
      <div className="pantalla-carga">
        <div className="logo-carga">💬</div>
        <div className="barra-contenedor">
          <div className="barra-progreso" style={{ width: `${progreso}%` }}></div>
        </div>
        <p>WhatsAppito Web Cargando... {progreso}%</p>
      </div>
    );
  }

  // Si ya cargó, mostramos el contenedor principal con la pantalla dividida
  return (
    <div className="whatsapp-web-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;