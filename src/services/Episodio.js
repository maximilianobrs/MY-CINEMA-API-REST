import { Episodio, Temporada } from "../models/index.js";
import { BASE_URL } from "../configs/configs.js";

const getEpisodio = async (id) => {
    try {
        const episodio = await Episodio.findByPk(id);

        if (episodio.length === 0) {
            return {
                code: 404,
                message: 'No se encontro el episodio',
                error: true
            };
        }

        const result = {
            ...episodio.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                },
                {
                    rel: 'all',
                    href: `${BASE_URL}/episodios`
                }
            ]
        }

        return {
            code: 200,
            message: 'episodio encontrado',
            episodios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener el episodio',
            error: error.message || 'Error desconocido'
        };
    }
};

const getEpisodios = async () => {
    try {
        const episodios = await Episodio.findAll();

        if (episodios.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron los episodios',
                error: true
            };
        }

        const result = episodios.map((episodio) => {
            return {
                ...episodio.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `${BASE_URL}/episodios/${episodio.id_episodio}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'episodios encontrados',
            episodios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener los episodios',
            error: error.message || 'Error desconocido'
        };
    }
};

const postEpisodio = async (titulo, numeroEpisodio, sinopsis, duracion, id_temporada) => {
    try {
        const temporada = await Temporada.findByPk(id_temporada);
        const episodio = await Episodio.create({ titulo, numeroEpisodio, sinopsis, duracion, id_temporada });

        if (!temporada || temporada === null) {
            return ({
                code: 404,
                message: 'No se pudo entrontrar la temporda temporada',
                error: true
            });
        };

        if (!episodio || episodio === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar el episodio',
                error: true
            });
        };

        return {
            code: 200,
            message: 'episodio agregado correctamente',
            episodio: episodio
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar el episodio',
            error: error.message || 'Error desconocido'
        });
    };
};

const putEpisodio = async (id, titulo, numeroEpisodio, sinopsis, duracion, id_temporada) => {
    try {

        const episodio = await Episodio.findByPk(id);

        if (!episodio || episodio === null) {
            return ({
                code: 404,
                message: 'No se encontró el episodio a actualizar',
                error: true
            });
        };

        await Episodio.update({ titulo, numeroEpisodio, sinopsis, duracion, id_temporada }, {
            where: { id_episodio: id }
        });

        return ({
            code: 200,
            message: 'episodio actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar el episodio',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteEpisodio = async (id) => {
    try {
        const episodio = await Episodio.findByPk(id);

        if (!episodio || episodio === null) {
            return ({
                code: 404,
                message: 'No se encontró el episodio a eliminar',
                error: true
            });
        };

        await Episodio.destroy({
            where: { id_episodio: id }
        });

        return ({
            code: 200,
            message: 'episodio eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar el episodio',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getEpisodio,
    getEpisodios,
    postEpisodio,
    putEpisodio,
    deleteEpisodio
};

export default service;