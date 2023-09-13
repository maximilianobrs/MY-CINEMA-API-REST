import service from "../services/Comentario.js";

export const getComentario = async (req, res) => {
    try {
        const result = await service.getComentario();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postComentario = async (req, res) => {
    try {
        const { comentario, puntuacion, id_serie, id_pelicula, id_usuario } = req.body;

        if (!comentario || !puntuacion || !id_usuario) {
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

        const result = await service.postComentario(comentario, puntuacion, id_serie, id_pelicula, id_usuario);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putComentario = async (req, res) => {
    try {
        const { comentario, puntuacion, id_serie, id_pelicula, id_usuario } = req.body;
        const { id } = req.params;

        const result = await service.putComentario(id, comentario, puntuacion, id_serie, id_pelicula, id_usuario);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteComentario = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteComentario(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};