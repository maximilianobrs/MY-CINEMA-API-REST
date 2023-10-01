import service from "../services/Genero.js";

export const getGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getGenero(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const getGeneros = async (req, res) => {
    try {
        const result = await service.getGeneros();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postGenero = async (req, res) => {
    try {
        const { genero } = req.body;

        if (!genero) {
            return res.status(400).json({
                code: 400,
                message: 'Genero es requerido',
                error: true
            });
        };

        const result = await service.postGenero(genero);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putGenero = async (req, res) => {
    try {
        const { genero } = req.body;
        const { id } = req.params;

        const result = await service.putGenero(id, genero);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteGenero = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteGenero(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};