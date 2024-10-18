const validateUser = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== "string") {
        return res.status(404).json({
            msg: "Por favor, passe valores válidos...",
        });
    }

    if (!email || typeof email !== "string") {
        return res.status(400).json({
            msg: "Por favor passe valores válidos...",
        });
    }

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({
            msg: "O email deve estar com formatação válida...",
        });
    }

    next();
};

const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
        return res.status(400).json({
            msg: "ID não encontrado ou inválido...",
        });
    }

    return next();
};

module.exports = { validateUser, validateUserId };