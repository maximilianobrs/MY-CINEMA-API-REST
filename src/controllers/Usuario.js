import service from "../services/Usuario.js";

export const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getUsuario(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const getUsuarios = async (req, res) => {
    try {
        const result = await service.getUsuarios();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postUsuario = async (req, res) => {
    try {
        const { userName, nombre, apellido, email, password, rol, fechaNacimiento } = req.body;

        if (!userName || !nombre || !apellido || !email || !password || !rol || !fechaNacimiento) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postUsuario(userName, nombre, apellido, email, password, rol, fechaNacimiento);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putUsuario = async (req, res) => {
    try {
        const { userName, nombre, apellido, email, password, rol, fechaNacimiento } = req.body;
        const { id } = req.params;

        const result = await service.putUsuario(id, userName, nombre, apellido, email, password, rol, fechaNacimiento);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteUsuario(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};