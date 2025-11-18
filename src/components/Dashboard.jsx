import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtener datos del usuario de localStorage
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      // Si no hay usuario, redirigir al login
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 ¡Bienvenido al Dashboard!</h1>
        
        <div style={styles.infoSection}>
          <div style={styles.infoCard}>
            <p style={styles.label}>👤 Nombre:</p>
            <p style={styles.value}>{user.nombre}</p>
          </div>

          <div style={styles.infoCard}>
            <p style={styles.label}>📧 Correo:</p>
            <p style={styles.value}>{user.correo}</p>
          </div>

          <div style={styles.infoCard}>
            <p style={styles.label}>🆔 ID de Usuario:</p>
            <p style={styles.value}>{user.id}</p>
          </div>
        </div>

        <div style={styles.successMessage}>
          ✅ Has iniciado sesión correctamente
        </div>

        <button onClick={handleLogout} style={styles.logoutButton}>
          🚪 Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
  },
  infoCard: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
  },
  label: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 5px 0',
    fontWeight: '500',
  },
  value: {
    fontSize: '18px',
    color: '#333',
    margin: '0',
    fontWeight: 'bold',
  },
  successMessage: {
    padding: '15px',
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '16px',
  },
  logoutButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#f44336',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Dashboard;