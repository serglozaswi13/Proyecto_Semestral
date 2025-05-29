import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EstudianteForm({ selected, onSuccess }) {
  const [form, setForm] = useState({
    num_cuenta: '',
    primer_apellido: '',
    segundo_apellido: '',
    nombres: '',
    carrera: '',
    grupo: '',
    telefono: ''
  });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    } else {
      setForm({
        num_cuenta: '',
        Primer_apellido: '',
        Segundo_apellido: '',
        Nombres: '',
        Carrera: '',
        Grupo: '',
        Telefono: ''
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = selected
      ? axios.put(`http://localhost:3001/api/estudiantes/${selected.num_cuenta}`, form)
      : axios.post('http://localhost:3001/api/estudiantes', form);

    request
      .then(() => {
        onSuccess();
        setForm({
          num_cuenta: '',
          Primer_apellido: '',
          Segundo_apellido: '',
          Nombres: '',
          Carrera: '',
          Grupo: '',
          Telefono: ''
        });
      })
      .catch(() => alert('Error al guardar estudiante'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selected ? 'Editar Estudiante' : 'Nuevo Estudiante'}</h3>
      {!selected && (
        <input
          name="num_cuenta"
          placeholder="Número de cuenta"
          value={form.num_cuenta}
          onChange={handleChange}
          required
        />
      )}
      <input name="Primer_apellido" placeholder="Primer Apellido" value={form.Primer_apellido} onChange={handleChange} />
      <input name="Segundo_apellido" placeholder="Segundo Apellido" value={form.Segundo_apellido} onChange={handleChange} />
      <input name="Nombres" placeholder="Nombres" value={form.Nombres} onChange={handleChange} />
      <input name="Carrera" placeholder="Carrera" value={form.Carrera} onChange={handleChange} />
      <input name="Grupo" placeholder="Grupo" value={form.Grupo} onChange={handleChange} />
      <input name="Telefono" placeholder="Teléfono" value={form.Telefono} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default EstudianteForm;

