const userService = require("../services/useService");

const userController = {
  create: async (req, res) => {
    try {
      const user = await userService.create(req.body);
      return res.status(200).json({
        msg: "Usuário criado com sucesso!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar criar o user",
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await userService.update(req.params.id, req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Usuário atualizado com sucesso!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atulizar o User",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await userService.getAll();
      if (!user) {
        return res.status(404).json({
          msg: "Nenhum User encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Todos o usuarios!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await userService.getById(req.params.id);

      if (!user) {
        return res.status(404).json({
          msg: "Usuário não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Usuário encontrado!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await userService.delete(req.params.id);
      if (!user) {
        return res.status(400).jon({
          msg: "Usuario não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Usuario deletado com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
};

module.exports = userController;