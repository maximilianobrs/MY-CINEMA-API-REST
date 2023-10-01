import service from "../services/Clasificacion.js";

export const getClasificacion = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getClasificacion(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const getClasificaciones = async (req, res) => {
    try {
        const result = await service.getClasificaciones();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postClasificacion = async (req, res) => {
    try {
        const { nombre, id_pelicula, id_serie } = req.body;

        if (!nombre) {
            return res.status(400).json({
                code: 400,
                message: 'Nombre es requerido',
                error: true
            });
        };

        if (!id_serie && !id_pelicula) {
            return res.status(400).json({
                code: 400,
                message: 'Debes proporcionar al menos una película o serie válida',
                error: true
            });
        };

        const result = await service.postClasificacion(nombre, id_pelicula, id_serie);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putClasificacion = async (req, res) => {
    try {
        const { nombre } = req.body;
        const { id } = req.params;

        const result = await service.putClasificacion(id, nombre);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteClasificacion = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteClasificacion(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};