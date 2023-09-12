import service from "../services/Actor.js";

export const getActor = async (req, res) => {
    try {
        const result = await service.getActor();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postActor = async (req, res) => {
    try {
        const { nombre, fechaNacimiento, nacionalidad, id_pelicula, id_serie } = req.body;

        if (!nombre || !fechaNacimiento || !nacionalidad) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postActor(nombre, fechaNacimiento, nacionalidad,id_pelicula,id_serie);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putActor = async (req, res) => {
    try {
        const { nombre, fechaNacimiento, nacionalidad, id_pelicula, id_serie } = req.body;
        const { id } = req.params;

        const result = await service.putActor(id, nombre, fechaNacimiento, nacionalidad, id_pelicula, id_serie);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteActor = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await service.deleteActor(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};