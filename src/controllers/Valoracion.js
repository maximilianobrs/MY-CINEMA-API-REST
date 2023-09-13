import service from "../services/Valoracion.js";

export const getValoracion = async (req, res) => {
    try {
        const result = await service.getValoracion();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postValoracion = async (req, res) => {
    try {
        const { puntuacion, id_pelicula, id_serie, id_usuario } = req.body;

        if (!puntuacion || !id_usuario) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        if (id_serie && id_pelicula) {
            return res.status(400).json({
                code: 400,
                message: 'Se debe ingresar id_serie o un id_pelicula',
                error: true
            });
        };

        const result = await service.postValoracion(puntuacion, id_pelicula, id_serie, id_usuario);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putValoracion = async (req, res) => {
    try {
        const { puntuacion } = req.body;
        const { id } = req.params;

        const result = await service.putValoracion(id, puntuacion);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteValoracion = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteValoracion(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};