import service from "../services/Episodio.js";

export const getEpisodio = async(req,res)=>{
    try {
        const result = await service.getEpisodio();

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const postEpisodio = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;

        if (!nombre || !inicio || !fin) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postEpisodio(nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putEpisodio = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;
        const { id } = req.params;

        const result = await service.putEpisodio(id, nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteEpisodio = async(req,res)=>{
    try {
        const { id } = req.params;

        const result = await service.deleteEpisodio(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};