import { Temporada, Serie } from "../models/index.js";

const getTemporada = async (id) => {
    try {
        const temporada = await Temporada.findByPk(id);

        if (temporada.length === 0) {
            return {
                code: 404,
                message: 'No se encontraro la temporada',
                error: true
            };
        }

        const result = {
            ...temporada.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                },
            ],
            all: {
                href: `http://localhost:${PORT}/api/v1/temporadas`
            }
        }

        return {
            code: 200,
            message: 'temporada encontrada',
            temporadas: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener la temporada',
            error: error.message || 'Error desconocido'
        };
    }
};

const getTemporadas = async () => {
    try {
        const temporadas = await Temporada.findAll();

        if (temporadas.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron las temporadas',
                error: true
            };
        }

        const result = temporadas.map((temporada) => {
            return {
                ...temporada.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/temporadas/${temporada.id_temporada}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'temporadas encontradas',
            temporadas: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener las temporadas',
            error: error.message || 'Error desconocido'
        };
    }
};

const postTemporada = async (numeroTemporada, anioLanzamiento, id_serie) => {
    try {
        const serie = await Serie.findByPk(id_serie);
        const temporada = await Temporada.create({ numeroTemporada, anioLanzamiento, id_serie });

        if (!serie || serie === null) {
            return ({
                code: 404,
                message: 'No se pudo encontrar la serie',
                error: true
            });
        };

        if (!temporada || temporada === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la temporada',
                error: true
            });
        };

        return {
            code: 200,
            message: 'temporada agregado correctamente',
            temporada: temporada
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la temporada',
            error: error.message || 'Error desconocido'
        });
    };
};

const putTemporada = async (id, numeroTemporada, anioLanzamiento, id_serie) => {
    try {

        const temporada = await Temporada.findByPk(id);

        if (!temporada || temporada === null) {
            return ({
                code: 404,
                message: 'No se encontró la temporada a actualizar',
                error: true
            });
        };

        await temporada.update({ numeroTemporada, anioLanzamiento, id_serie }, {
            where: { id_temporada: id }
        });

        return ({
            code: 200,
            message: 'temporada actualizada correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar la temporada',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteTemporada = async (id) => {
    try {
        const temporada = await Temporada.findByPk(id);

        if (!temporada || temporada === null) {
            return ({
                code: 404,
                message: 'No se encontró la temporada a eliminar',
                error: true
            });
        };

        await temporada.destroy({
            where: { id_temporada: id }
        });

        return ({
            code: 200,
            message: 'temporada eliminada correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar la temporada',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getTemporada,
    getTemporadas,
    postTemporada,
    putTemporada,
    deleteTemporada
};

export default service;