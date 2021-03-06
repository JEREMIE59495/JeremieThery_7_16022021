const express = require ('express');
const router = express.Router();

const groupeController = require('../controllers/groupe');

router.get('/', groupeController.getAllGroupe);
router.post('/', groupeController.createNewGroupe);
router.delete('/:id', groupeController.deleteGroupe);

module.exports = router;