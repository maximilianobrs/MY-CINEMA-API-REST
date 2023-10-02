import { Actor, Serie, Pelicula } from "../models/index.js";
import { BASE_URL } from "../configs/configs.js";

const getActor = async (id) => {
    try {
        const actor = await Actor.findByPk(id);

        if (actor.length === 0) {
            return {
                code: 404,
                message: 'No se encontro el actor',
                error: true
            };
        }

        const result = {
            ...actor.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}/actores/${actor.id_actor}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `${BASE_URL}/actores/${actor.id_actor}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `${BASE_URL}/actores/${actor.id_actor}`
                },
                {
                    rel: 'all',
                    href: `${BASE_URL}/actores`
                }
            ]
        }

        return {
            code: 200,
            message: 'Actor no encontrado',
            actores: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener el actor',
            error: error.message || 'Error desconocido'
        };
    }
};

const getActores = async () => {
    try {
        const actores = await Actor.findAll();

        if (actores.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron actores',
                error: true
            };
        }

        const result = actores.map((actor) => {
            return {
                ...actor.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `${BASE_URL}/actores/${actor.id_actor}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `${BASE_URL}/actores/${actor.id_actor}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `${BASE_URL}/actores/${actor.id_actor}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `${BASE_URL}/actores/${actor.id_actor}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'Actores encontrados',
            actores: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener los actores',
            error: error.message || 'Error desconocido'
        };
    }
};

const postActor = async (nombre, fechaNacimiento, nacionalidad, id_pelicula, id_serie) => {
    try {

        const actor = await Actor.create({ nombre, fechaNacimiento, nacionalidad });

        if (!actor || actor === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar el actor',
                error: true
            });
        };

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
        };

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
        };

        return {
            code: 200,
            message: 'Actor agregado correctamente',
            actor: actor
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar el actor',
            error: error.message || 'Error desconocido'
        });
    };
};

const putActor = async (id, nuevoNombre, nuevaFechanacimiento, nuevaNacionalidad) => {
    try {

        const actor = await Actor.findByPk(id);

        if (!actor || actor === null) {
            return ({
                code: 404,
                message: 'No se encontró el actor a actualizar',
                error: true
            });
        };

        await Actor.update({ nuevoNombre, nuevaFechanacimiento, nuevaNacionalidad }, {
            where: { id_actor: id }
        });

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

const deleteActor = async (id) => {
    try {
        const actor = await Actor.findByPk(id);

        if (!actor || actor === null) {
            return ({
                code: 404,
                message: 'No se encontró el actor a eliminar',
                error: true
            });
        };

        await Actor.destroy({
            where: { id_actor: id }
        });

        return ({
            code: 200,
            message: 'Actor eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al actor',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getActor,
    getActores,
    postActor,
    putActor,
    deleteActor
};

export default service;