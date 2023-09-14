import { Episodio } from "../models/index.js";

const getEpisodio = async () => {
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
                        href: `http://localhost:${PORT}/api/v1/episodios/${episodio.id_episodio}`,
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/episodios/${episodio.id_episodio}`,
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/episodios/${episodio.id_episodio}`,
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

        const episodio = await Episodio.create({ titulo, numeroEpisodio, sinopsis, duracion, id_temporada });

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

        const episodio = Episodio.findByPk(id);

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
    postEpisodio,
    putEpisodio,
    deleteEpisodio
};

export default service;