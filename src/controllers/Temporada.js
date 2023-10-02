import service from "../services/Temporada.js";

export const getTemporada = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getTemporada(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const getTemporadas = async (req, res) => {
    try {
        const result = await service.getTemporadas();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postTemporada = async (req, res) => {
    try {
        const { numeroTemporadas, aniaLanzamiento, id_serie } = req.body;

        if (!numeroTemporadas || !aniaLanzamiento || !id_serie) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postTemporada(numeroTemporadas, aniaLanzamiento, id_serie);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putTemporada = async (req, res) => {
    try {
        const { numeroTemporada, anioLanzamiento, id_serie } = req.body;
        const { id } = req.params;

        const result = await service.putTemporada(id, numeroTemporada, anioLanzamiento, id_serie);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteTemporada = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteTemporada(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};