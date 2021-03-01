const express = require ('express');
const router = express.Router();

const groupeController = require('../controllers/groupe');
//const Publication = require('../models/publication');

router.get('/', groupeController.getAllGroupe);
router.post('/', groupeController.createNewGroupe);
router.delete('/:id', groupeController.deleteGroupe);

module.exports = router;