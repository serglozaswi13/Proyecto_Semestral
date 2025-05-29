const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/estudianteController');

router.get('/', ctrl.getAll);
router.get('/stats', ctrl.stats); // 👈 Mover esta línea arriba
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;

