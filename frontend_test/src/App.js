import React, { useState } from 'react';
import EstudianteList from './components/EstudianteList';
import EstudianteForm from './components/EstudianteForm';

function App() {
  const [selectedEst, setSelectedEst] = useState(null);
  const [reload, setReload] = useState(false);

  const handleEdit = (estudiante) => setSelectedEst(estudiante);
  const handleSuccess = () => {
    setSelectedEst(null);
    setReload(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Gestión de Estudiantes</h1>
      <EstudianteForm selected={selectedEst} onSuccess={handleSuccess} />
      <EstudianteList onEdit={handleEdit} reload={reload} />
    </div>
  );
}

export default App;

