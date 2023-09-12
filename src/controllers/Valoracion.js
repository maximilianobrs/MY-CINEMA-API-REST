import service from "../services/Valoracion.js";

export const getValoracion = async(req,res)=>{
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

export const postValoracion = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;

        if (!nombre || !inicio || !fin) {
            return res.status(400).json({
                code: 400,
                message: 'Falta de datos requeridos',
                error: true
            });
        };

        const result = await service.postValoracion(nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        };

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const putValoracion = async(req,res)=>{
    try {
        const { nombre, descripcion, inicio, fin } = req.body;
        const { id } = req.params;

        const result = await service.putValoracion(id, nombre, descripcion, inicio, fin);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};

export const deleteValoracion = async(req,res)=>{
    try {
        const { id } = req.params;

        const result = await service.deleteValoracion(id);

        if (result.error) {
            return res.status(result.code).json({ code: result.code, message: result.message, error: result.error });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ code: 500, message: 'Ocurrio un error interno', error: error.message });
    };
};