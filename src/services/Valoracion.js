import { Pelicula, Serie, Valoracion } from "../models/index.js";

const getValoracion = async () => {
    try {
        const valoraciones = await Valoracion.findAll();

        if (valoraciones.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron las valoraciones',
                error: true
            };
        }

        const result = valoraciones.map((valoracion) => {
            return {
                ...valoracion.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://localhost:${PORT}/api/v1/valoraciones/${valoracion.id_valoracion}`,
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `http://localhost:${PORT}/api/v1/valoraciones/${valoracion.id_valoracion}`,
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/valoraciones/${valoracion.id_valoracion}`,
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/valoraciones/${valoracion.id_valoracion}`,
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'valoraciones encontradas',
            valoraciones: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener las valoraciones',
            error: error.message || 'Error desconocido'
        };
    }
};

const postValoracion = async (puntuacion, id_pelicula, id_serie, id_valoracion) => {
    try {
        const pelicula = await Pelicula.findByPk(id_pelicula);
        const serie = await Serie.findByPk(id_pelicula);

        const valoracion = await Valoracion.create({ puntuacion, id_pelicula, id_serie, id_valoracion });

        if (!pelicula || pelicula === null) {
            return ({
                code: 404,
                message: 'No se encontro la pelicula',
                error: true
            });
        };

        if (!serie || serie === null) {
            return ({
                code: 404,
                message: 'No se encontro la serie',
                error: true
            });
        };

        if (!valoracion || valoracion === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la valoracion',
                error: true
            });
        };

        return {
            code: 200,
            message: 'valoracion agregado correctamente',
            valoracion: valoracion
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la valoracion',
            error: error.message || 'Error desconocido'
        });
    };
};

const putValoracion = async (id, puntuacion) => {
    try {

        const valoracion = await Valoracion.findByPk(id);

        if (!valoracion || valoracion === null) {
            return ({
                code: 404,
                message: 'No se encontró la valoracion a actualizar',
                error: true
            });
        };

        await valoracion.update({ puntuacion }, {
            where: { id_valoracion: id }
        });

        return ({
            code: 200,
            message: 'valoracion actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar la valoracion',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteValoracion = async (id) => {
    try {
        const valoracion = await Valoracion.findByPk(id);

        if (!valoracion || valoracion === null) {
            return ({
                code: 404,
                message: 'No se encontró la valoracion a eliminar',
                error: true
            });
        };

        await valoracion.destroy({
            where: { id_valoracion: id }
        });

        return ({
            code: 200,
            message: 'valoracion eliminada correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar la valoracion',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getValoracion,
    postValoracion,
    putValoracion,
    deleteValoracion
};

export default service;