import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EstudianteList({ onEdit, reload }) {
  const [estudiantes, setEstudiantes] = useState([]);

  const fetchEstudiantes = () => {
    axios.get('http://localhost:3001/api/estudiantes')
      .then(res => setEstudiantes(res.data))
      .catch(() => alert("Error al cargar estudiantes"));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/estudiantes/${id}`)
      .then(fetchEstudiantes)
      .catch(() => alert("Error al eliminar"));
  };

  useEffect(() => {
    fetchEstudiantes();
  }, [reload]); // Se actualiza al cambiar `reload`

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Número de Cuenta</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Grupo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map(est => (
            <tr key={est.num_cuenta}>
              <td>{est.num_cuenta}</td>
              <td>{est.primer_apellido}</td>
              <td>{est.segundo_apellido}</td>
              <td>{est.nombres}</td>
              <td>{est.carrera}</td>
              <td>{est.grupo}</td>
              <td>{est.telefono}</td>
              <td>
                <button onClick={() => onEdit(est)}>Editar</button>
                <button onClick={() => handleDelete(est.num_cuenta)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstudianteList;



