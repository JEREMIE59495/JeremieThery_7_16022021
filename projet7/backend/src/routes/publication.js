const express = require ('express');
const router = express.Router();

const PublicationController = require('../controllers/publication');
//const Publication = require('../models/publication');

router.get('/', PublicationController.getAllPublication);
router.post('/', PublicationController.createNewPublication);
router.put('/:id', PublicationController.modifyPublication);
router.delete('/:id', PublicationController.deletePublication);
router.get('/:id', PublicationController.getOnePublication);
module.exports = router;