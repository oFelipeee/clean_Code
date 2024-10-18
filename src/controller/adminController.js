const userService = require("../services/userService");

const adminController = {
  create: async (req, res) => {
    try {
      const user = await userService.create(req.body);
      return res.status(200).json({
        msg: "Admin criado com sucesso!",
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
          msg: "Admin não encontrado",
        });
      }

      return res.status(200).json({
        msg: "Admin atualizado com sucesso!",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atulizar o Admin",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await userService.getAll();
      if (!user) {
        return res.status(404).json({
          msg: "Nenhum Admin encontrado!",
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
          msg: "Admin não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Admin encontrado!",
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

const AuthAdmin = {
  sigIn: async (req, res) => {
    const { email, senha } = req.body;

    if (!email.includes("@" && email.includes("."))) {
      return res.status(400).json({
        msg: "Por favor, digite um email válido...",
      });
    }

    if (senha <= 6 || typeof senha !== "string") {
      return res.status(400).json({
        msg: "Por favor, digite uma senha maior que 6 digítos...",
      });
    }

    return res.status(200).json({
      msg: "Admin Criado com sucesso!",
    });
  },
};

module.exports = adminController;