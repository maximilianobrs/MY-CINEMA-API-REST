import { Comentario, Comentario, Usuario } from "../models/index.js";

const getComentario = async (id) => {
    try {
        const comentarios = await Comentario.findByPk(id);

        if (comentarios.length === 0) {
            return {
                code: 404,
                message: 'No se encontro el comentario',
                error: true
            };
        }

        const result = {
            ...actor.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                },
            ],
            all:{
                href: `http://localhost:${PORT}/api/v1/comentarios`
            }
        }

        return {
            code: 200,
            message: 'comentario encontrado',
            comentarios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener el comentario',
            error: error.message || 'Error desconocido'
        };
    }
};

const getComentarios = async () => {
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
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/comentarios/${actor.id_actor}`
                    },
                ],
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

const postComentario = async (textoComentario, puntuacion, id_serie, id_pelicula, id_usuario) => {
    try {

        if (id_usuario) {
            const usuario = await Usuario.findByPk(id_usuario);
            if (usuario) {
                await comentario.addPelicula(usuario);
            } else {
                return {
                    code: 404,
                    message: 'No se encontró el usuario proporcionada',
                    error: true
                };
            }
        }

        if (id_pelicula) {
            const pelicula = await Pelicula.findByPk(id_pelicula);
            if (pelicula) {
                await comentario.addPelicula(pelicula);
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
            if (!serie) {
                return {
                    code: 404,
                    message: 'No se encontró la serie proporcionada',
                    error: true
                };
            }
        }

        const comentario = await Comentario.create({ textoComentario, puntuacion });

        if (!comentario || comentario === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar el comentario',
                error: true
            });
        };

        return {
            code: 200,
            message: 'comentario agregado correctamente',
            comentario: comentario
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar el comentario',
            error: error.message || 'Error desconocido'
        });
    };
};

const putComentario = async (id, nuevoComentario, nuevaPuntuacion) => {
    try {

        const comentario = await Comentario.findByPk(id);

        if (!comentario || comentario === null) {
            return ({
                code: 404,
                message: 'No se encontró el comentario a actualizar',
                error: true
            });
        };

        await Comentario.update({ nuevoComentario, nuevaPuntuacion }, {
            where: { id_comentario: id }
        });

        return ({
            code: 200,
            message: 'comentario actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar el comentario',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteComentario = async (id) => {
    try {
        const comentario = await Comentario.findByPk(id);

        if (!comentario || comentario === null) {
            return ({
                code: 404,
                message: 'No se encontró el comentario a eliminar',
                error: true
            });
        };

        await Comentario.destroy({
            where: { id_comentario: id }
        });

        return ({
            code: 200,
            message: 'comentario eliminada correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar comentario',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getComentario,
    getComentarios,
    postComentario,
    putComentario,
    deleteComentario
};

export default service;