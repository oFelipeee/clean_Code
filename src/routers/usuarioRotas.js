const { Router } = require("express");
const userController = require('../controller/userController');
const router = Router();

// Funcao de criar
router.post('/', userController.create);

// Funcao de editar
router.put('/:id', userController.update);

// Funcao de deletor
router.delete('/:id', userController.delete);

// Funcao de buscar unico
router.get('/:id', userController.getOne);

// Funcao de buscar todos
router.get('/:id', userController.getAll);

module.exports = router;