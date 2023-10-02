import { Serie } from "../models/index.js";
import { BASE_URL } from "../configs/configs.js";

const getSerie = async (id) => {
    try {
        const serie = await Serie.findByPk(id);

        if (serie.length === 0) {
            return {
                code: 404,
                message: 'No se encontro la serie',
                error: true
            };
        }

        const result = {
            ...serie.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}/series/${serie.id_serie}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `${BASE_URL}/series/${serie.id_serie}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `${BASE_URL}/series/${serie.id_serie}`
                },
                {
                    rel: 'all',
                    href: `${BASE_URL}/series`
                }
            ]
        }

        return {
            code: 200,
            message: 'serie encontrada',
            series: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener la serie',
            error: error.message || 'Error desconocido'
        };
    }
};

const getSeries = async () => {
    try {
        const series = await Serie.findAll();

        if (series.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron las series',
                error: true
            };
        }

        const result = series.map((serie) => {
            return {
                ...serie.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `${BASE_URL}/series/${serie.id_serie}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `${BASE_URL}/series/${serie.id_serie}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `${BASE_URL}/series/${serie.id_serie}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `${BASE_URL}/series/${serie.id_serie}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'series encontradas',
            series: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener las series',
            error: error.message || 'Error desconocido'
        };
    }
};

const postSerie = async (titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds) => {
    try {

        const serie = await Serie.create({ titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds });

        if (!serie || serie === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la serie',
                error: true
            });
        };

        if (generoIds && generoIds.length > 0) {
            const generos = await Genero.findAll({ where: { id: generoIds } });
            if (generos && generos.length > 0) {
                await Serie.addGeneros(generos);
            } else {
                return {
                    code: 404,
                    message: 'No se encontraron los géneros proporcionados',
                    error: true
                };
            }
        };

        return {
            code: 200,
            message: 'serie agregado correctamente',
            serie: serie
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la serie',
            error: error.message || 'Error desconocido'
        });
    };
};

const putSerie = async (id, titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds) => {
    try {

        const serie = Serie.findByPk(id);

        if (!serie || serie === null) {
            return ({
                code: 404,
                message: 'No se encontró la serie a actualizar',
                error: true
            });
        };

        await Serie.update({ titulo, aniaLanzamiento, sinopsis, creador, duracion, poster, trailer, generoIds }, {
            where: { id_serie: id }
        });

        return ({
            code: 200,
            message: 'serie actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar la serie',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteSerie = async (id) => {
    try {
        const serie = await Serie.findByPk(id);

        if (!serie || serie === null) {
            return ({
                code: 404,
                message: 'No se encontró la serie a eliminar',
                error: true
            });
        };

        await Serie.destroy({
            where: { id_serie: id }
        });

        return ({
            code: 200,
            message: 'serie eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar la serie',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getSerie,
    getSeries,
    postSerie,
    putSerie,
    deleteSerie
};

export default service;