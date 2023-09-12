import service from "../services/Comentario.js";

export const getComentario = async(req,res)=>{
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

export const postComentario = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;

        if (!nombre || !inicio || !fin) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postComentario(nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putComentario = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;
        const { id } = req.params;

        const result = await service.putComentario(id, nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteComentario = async(req,res)=>{
    try {
        const { id } = req.params;

        const result = await service.deleteComentario(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};