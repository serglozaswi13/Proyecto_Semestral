const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/estudianteController');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.get('/stats', ctrl.stats);

module.exports = router;
