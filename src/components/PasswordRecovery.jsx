/* import { Navigate, useNavigate } from "react-router-dom";
import './styles/passwordRecovery.css'
import React, { useState } from 'react';

function PasswordRecovery() {
const navigate = useNavigate();
const [username, setUsername] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState('');
  const [respuestaSeguridad, setRespuestaSeguridad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarSolicitudCambioContrasena = async (e) => {
    e.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
    
    const response = await fetch('http://localhost:4000/cambiar-contrasena', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        nuevaContraseña: nuevaContraseña,
        preguntaSeleccionada: preguntaSeleccionada,
        respuestaSeguridad: respuestaSeguridad,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMensaje('Contraseña cambiada exitosamente');
    } else {
      setMensaje(`Error: ${data.mensaje}`);
    }
  };

  function goHome() {
    navigate("/userHome");
}
  return (
    <form onSubmit={enviarSolicitudCambioContrasena}className="form-password-recovery">
      <label>
        Nombre de usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Nueva Contraseña:
        <input type="password" value={nuevaContraseña} onChange={(e) => setNuevaContraseña(e.target.value)} />
      </label>
      <label>
        Selecciona la pregunta de seguridad:
        <select value={preguntaSeleccionada} onChange={(e) => setPreguntaSeleccionada(e.target.value)}>
          <option value="pregunta1">¿En qué ciudad naciste?</option>
          <option value="pregunta2">El nombre de tu primer amor platónico</option>
          <option value="pregunta3">El nombre de tu primera mascota</option>
        </select>
      </label>
      <label>
        Respuesta de seguridad:
        <input type="text" value={respuestaSeguridad} onChange={(e) => setRespuestaSeguridad(e.target.value)} />
      </label>
      <button type="submit">Cambiar Contraseña</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default PasswordRecovery;

 */