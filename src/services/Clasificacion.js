import { Clasificacion, Serie, Pelicula } from "../models/index.js";
import { BASE_URL } from "../configs/configs.js";

const getClasificacion = async (id) => {
    try {
        const clasificacion = await Clasificacion.findByPk(id);

        if (clasificacion.length === 0) {
            return {
                code: 404,
                message: 'No se encontro la clasificacion',
                error: true
            };
        }

        const result = {
            ...clasificacion.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                },
                {
                    rel: 'all',
                    href: `${BASE_URL}/clasificaciones`
                }
            ]
        }

        return {
            code: 200,
            message: 'clasificacion encontrada',
            clasificaciones: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener la clasificacion',
            error: error.message || 'Error desconocido'
        };
    }
};

const getClasificaciones = async () => {
    try {
        const clasificaciones = await Clasificacion.findAll();

        if (clasificaciones.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron las clasificaciones',
                error: true
            };
        }

        const result = clasificaciones.map((clasificacion) => {
            return {
                ...clasificacion.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `${BASE_URL}/clasificaciones/${clasificacion.id_clasificacion}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'clasificaciones encontradas',
            clasificaciones: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener las clasificaciones',
            error: error.message || 'Error desconocido'
        };
    }
};

const postClasificacion = async (nombre, id_pelicula, id_serie) => {
    try {

        const clasificacion = await Clasificacion.create({ nombre });

        if (!clasificacion || clasificacion === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la clasificacion',
                error: true
            });
        };

        if (id_pelicula) {
            const pelicula = await Pelicula.findByPk(id_pelicula);
            if (pelicula) {
                await clasificacion.addPelicula(pelicula);
            } else {
                return {
                    code: 404,
                    message: 'No se encontró la película proporcionada',
                    error: true
                };
            }
        }

        if (id_serie) {
            const serie = await Serie.findByPk(id_serie);
            if (serie) {
                await clasificacion.addSerie(serie);
            } else {
                return {
                    code: 404,
                    message: 'No se encontró la serie proporcionada',
                    error: true
                };
            }
        }

        return {
            code: 200,
            message: 'Clasificacion agregada correctamente',
            clasificacion: clasificacion
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la clasificacion',
            error: error.message || 'Error desconocido'
        });
    };
};

const putClasificacion = async (id, nuevoNombre) => {
    try {

        const clasificacion = await Clasificacion.findByPk(id);

        if (!clasificacion || clasificacion === null) {
            return ({
                code: 404,
                message: 'No se encontró la Clasificacion a actualizar',
                error: true
            });
        };

        await Clasificacion.update({ nuevoNombre }, {
            where: { id_clasificacion: id }
        });

        return ({
            code: 200,
            message: 'Clasificacion actualizada correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar la Clasificacion',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteClasificacion = async (id) => {
    try {
        const clasificacion = await Clasificacion.findByPk(id);

        if (!clasificacion || clasificacion === null) {
            return ({
                code: 404,
                message: 'No se encontró en la clasificacion a eliminar',
                error: true
            });
        };

        await Clasificacion.destroy({
            where: { id_clasificacion: id }
        });

        return ({
            code: 200,
            message: 'clasificacion eliminada correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar la clasificacion',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getClasificacion,
    getClasificaciones,
    postClasificacion,
    putClasificacion,
    deleteClasificacion
};

export default service;