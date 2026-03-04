import { Sidebar } from '../components/sidebar';

export const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="main-area welcome-area">
        <div className="welcome-content">
          <h1>WhatsAppito Web</h1>
          <p>Envía y recibe mensajes sin mantener tu teléfono conectado.</p>
          <p>Selecciona a Rey, Cochi, Ivo o Brunini en la lista para comenzar a chatear.</p>
        </div>
      </div>
    </>
  );
};