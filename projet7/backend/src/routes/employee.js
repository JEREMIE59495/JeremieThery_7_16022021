const express = require ('express');
const router = express.Router();
const multer = require('../middleware/multer-config')

const employeeController = require('../controllers/employee');
//const Employee = require('../models/employee');

router.get('/', employeeController.getEmployeeList);
router.get('/:id', employeeController.getOneEmployee);
router.post('/', multer,employeeController.createNewEmployee);
router.put('/:id',multer,employeeController.modifyEmployee);
router.delete('/:id', employeeController.deleteEmployee);
module.exports = router;