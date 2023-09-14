import { Genero } from "../models/index.js";

const getGenero = async () => {
    try {
        const generos = await Genero.findAll();

        if (generos.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron los generos',
                error: true
            };
        }

        const result = generos.map((genero) => {
            return {
                ...genero.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://localhost:${PORT}/api/v1/generos/${genero.id_genero}`,
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/generos/${genero.id_genero}`,
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/generos/${genero.id_genero}`,
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'generos encontrados',
            generos: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener los generos',
            error: error.message || 'Error desconocido'
        };
    }
};

const postGenero = async(textgenero) => {
    try {

        const genero = await Genero.create({ textgenero });

        if (!genero || genero === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar el genero',
                error: true
            });
        };

        return {
            code: 200,
            message: 'genero agregado correctamente',
            genero: genero
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar el genero',
            error: error.message || 'Error desconocido'
        });
    };
};

const putGenero = async(id, nuevoGenero) => {
    try {

        const genero = Genero.findByPk(id);

        if (!genero || genero === null) {
            return ({
                code: 404,
                message: 'No se encontró el genero a actualizar',
                error: true
            });
        };

        await Genero.update({ nuevoGenero }, {
            where: { id_genero: id }
        });

        return ({
            code: 200,
            message: 'genero actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar el genero',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteGenero = async(id) => {
    try {
        const genero = await Genero.findByPk(id);

        if (!genero || genero === null) {
            return ({
                code: 404,
                message: 'No se encontró el genero a eliminar',
                error: true
            });
        };

        await Genero.destroy({
            where: { id_genero: id }
        });

        return ({
            code: 200,
            message: 'genero eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar el genero',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getGenero,
    postGenero,
    putGenero,
    deleteGenero
};

export default service;