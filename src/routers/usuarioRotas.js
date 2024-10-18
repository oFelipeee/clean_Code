const { Router } = require("express");
const userController = require('../controller/userController');
const router = Router();
const { validateUser, validateUserId } = require("../middlewares/validateUser")

// Funcao de criar
router.post('/', validateUser, userController.create);

// Funcao de editar
router.put('/:id', validateUser, validateUserId, userController.update);

// Funcao de deletor
router.delete('/:id', validateUserId, userController.delete);

// Funcao de buscar unico
router.get('/:id', validateUserId, userController.getOne);

// Funcao de buscar todos
router.get('/:id', userController.getAll);

module.exports = router;