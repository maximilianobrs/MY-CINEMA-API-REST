import { Clasificacion, Comentario } from "../models/index.js";

const getComentario = async() => {
    try {
        const comentarios = await Comentario.findAll();

        if (comentarios.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron comentarios',
                error: true
            };
        }

        const result = comentarios.map((actor) => {
            return {
                ...actor.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`,
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`,
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`,
                    },
                ],
                order: [
                    {
                        rel: 'ASC',
                        href: `http://localhost:${PORT}/api/v1/comentarios/asc/inicio`,
                    },
                    {
                        rel: 'DESC',
                        href: `http://localhost:${PORT}/api/v1/comentarios/desc/inicio`,
                    }
                ]
            }
        })

        return {
            code: 200,
            message: 'comentarios encontrados',
            comentarios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener los comentarios',
            error: error.message || 'Error desconocido'
        };
    }
};

const postComentario = async(comentario, puntuacion,) => {
    try {

        if (id_pelicula) {
            const pelicula = await Pelicula.findByPk(id_pelicula);
            if (pelicula) {
                await Clasificacion.addPelicula(pelicula);
            }else{
                return {
                    code: 404,
                    message: 'No se encontró la película proporcionada',
                    error: true
                }; 
            }
        }

        if (id_serie) {
            const serie = await Serie.findByPk(id_serie);
            if (!serie) {
                return {
                    code: 404,
                    message: 'No se encontró la serie proporcionada',
                    error: true
                };
            }
        }

        const clasificacion = await Clasificacion.create({ nombre, id_pelicula, id_serie });

        if (!clasificacion || clasificacion === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la clasificacion',
                error: true
            });
        };

        return {
            code: 200,
            message: 'Clasificacion agregada correctamente',
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la clasificacion',
            error: error.message || 'Error desconocido'
        });
    };
};

const putComentario = async(req, res) => {
    try {

        const actor = Clasificacion.findByPk(id);

        if (!actor || actor === null) {
            return ({
                code: 404,
                message: 'No se encontró el actor a actualizar',
                error: true
            });
        };

        await Clasificacion.update({ nombre, fechaNacimiento, nacionalidad }, {
            where: { id_actor: id }
        });

        if (id_pelicula) {
            const pelicula = await Pelicula.findByPk(id_pelicula);
            if (pelicula) {
                await actor.addPelicula(pelicula);
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
                await actor.addSerie(serie);
            } else {
                return {
                    code: 404,
                    message: 'No se encontró la serie proporcionada',
                    error: true
                };
            }
        }

        return ({
            code: 200,
            message: 'Actor actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar el actor',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteComentario = async(req, res) => {

};

const service = {
    getComentario,
    postComentario,
    putComentario,
    deleteComentario
};

export default service;