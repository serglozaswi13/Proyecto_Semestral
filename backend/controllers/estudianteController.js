const pool = require('../db');

// GET /api/estudiantes
exports.getAll = async (req, res) => {
  const result = await pool.query('SELECT * FROM Estudiante');
  res.json(result.rows);
};

// GET /api/estudiantes/:id
exports.getById = async (req, res) => {
  const result = await pool.query('SELECT * FROM Estudiante WHERE num_cuenta = $1', [req.params.id]);
  res.json(result.rows[0]);
};

// POST /api/estudiantes
exports.create = async (req, res) => {
  const { num_cuenta, Primer_apellido, Segundo_apellido, Nombres, Carrera, Grupo, Telefono } = req.body;
  const result = await pool.query(
    'INSERT INTO Estudiante VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [num_cuenta, Primer_apellido, Segundo_apellido, Nombres, Carrera, Grupo, Telefono]
  );
  res.json(result.rows[0]);
};

// PUT /api/estudiantes/:id
exports.update = async (req, res) => {
  const { Primer_apellido, Segundo_apellido, Nombres, Carrera, Grupo, Telefono } = req.body;
  const result = await pool.query(
    `UPDATE Estudiante SET Primer_apellido=$1, Segundo_apellido=$2, Nombres=$3, Carrera=$4, Grupo=$5, Telefono=$6
     WHERE num_cuenta=$7 RETURNING *`,
    [Primer_apellido, Segundo_apellido, Nombres, Carrera, Grupo, Telefono, req.params.id]
  );
  res.json(result.rows[0]);
};

// DELETE /api/estudiantes/:id
exports.remove = async (req, res) => {
  await pool.query('DELETE FROM Estudiante WHERE num_cuenta = $1', [req.params.id]);
  res.json({ message: 'Estudiante eliminado' });
};

// GET /api/stats
exports.stats = async (req, res) => {
  const result = await pool.query('SELECT COUNT(*) as total_estudiantes FROM Estudiante');
  res.json(result.rows[0]);
};
