const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const estudianteRoutes = require('./routes/estudianteRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/estudiantes', estudianteRoutes);

app.listen(4000, () => {
  console.log('Servidor backend en http://localhost:4000');
});
