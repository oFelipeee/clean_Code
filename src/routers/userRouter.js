const { Router } = require("express");
const userController = require("../controllers/userController");
const { validateUser, validateUserId } = require("../middlewares/validateUser");

const router = Router();

//Criar
router.post("/", validateUser, userController.create);
//Atualizar
router.put("/:id", validateUser, validateUserId, userController.update);
//Excluir
router.delete("/:id", validateUserId, userController.delete);
//Buscar único
router.get("/:id", userController.getOne);
//Buscar todos
router.get("/", userController.getAll);

module.exports = router;