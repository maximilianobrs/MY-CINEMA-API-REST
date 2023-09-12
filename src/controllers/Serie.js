import service from "../services/Serie.js";

export const getSerie = async (req, res) => {
    try {
        const result = await service.getSerie();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postSerie = async (req, res) => {
    try {
        const { titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds } = req.body;

        if (!titulo || !aniaLanzamiento || !sinopsis || !creador || !duracion || !poster || !trailer) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postSerie(titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putSerie = async (req, res) => {
    try {
        const {titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds } = req.body;
        const { id } = req.params;

        const result = await service.putSerie(id, titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteSerie = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteSerie(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};