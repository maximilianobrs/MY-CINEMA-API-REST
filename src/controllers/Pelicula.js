import service from "../services/Pelicula.js";

export const getPelicula = async (req, res) => {
    try {
        const result = await service.getPelicula();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postPelicula = async (req, res) => {
    try {
        const { titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer, generoIds } = req.body;

        if (!titulo || !aniaLanzamiento || !sinopsis || !director || !duracion || !poster || !trailer) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postPelicula(titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer, generoIds);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putPelicula = async (req, res) => {
    try {
        const { titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer } = req.body;
        const { id } = req.params;

        const result = await service.putPelicula(id, titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deletePelicula = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deletePelicula(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};