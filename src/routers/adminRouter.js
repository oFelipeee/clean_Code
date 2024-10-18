const { Router } = require("express");
const userController = require("../controllers/userController");
const { validateUser, validateUserId } = require("../middlewares/validateUser");

const router = Router();

router.post("/", validateUser, userController.create);

router.put("/:id", validateUser, validateUserId, userController.update);

router.delete("/:id", validateUserId, userController.delete);

router.get("/:id", userController.getOne);

router.get("/", userController.getAll);

module.exports = router;