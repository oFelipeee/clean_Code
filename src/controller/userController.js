const userService = require("../services/useService")

const userController = {
     create: async (req, res) => {
       try {
        const user = await userService.create(req.body);
        return res.status(201).json({
            msg: 'Usuario criado com sucesso',
            user
        })
       } catch (error) {
        return res.status(500).json({
            msg: 'Erro ao criar o Usuario'
        })
       }
     }
}

module.exports = userController;