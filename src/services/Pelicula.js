import { Pelicula, Genero } from "../models/index.js";
import { BASE_URL } from "../configs/configs.js";
import { helperUrl } from "../utils/helperUrl.js";

const getPelicula = async (id) => {
    try {
        const pelicula = await Pelicula.findByPk(id);
        
        if (!pelicula) {
            return {
                code: 404,
                message: 'No se encontro la pelicula',
                error: true
            };
        }

        const result = {
            ...pelicula.dataValues,
            links: [
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `${BASE_URL}/peliculas/${pelicula.id_pelicula}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `${BASE_URL}/peliculas/${pelicula.id_pelicula}`
                },
                ...helperUrl(pelicula.id_pelicula, 'peliculas',
                    [
                        'actores', 'generos', 'clasificacion', 'comentarios', 'valoraciones'
                    ]),
                {
                    rel: 'all',
                    href: `${BASE_URL}/peliculas`
                }
            ]
        }

        return {
            code: 200,
            message: 'pelicula encontrada',
            links:[
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}peliculas`
                },
            ],
            peliculas: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener la pelicula',
            error: error.message || 'Error desconocido'
        };
    }
};

const getPeliculas = async () => {
    try {
        const peliculas = await Pelicula.findAll();
        
        if (!peliculas) {
            return {
                code: 404,
                message: 'No se encontraron las peliculas',
                error: true
            };
        }

        const result = peliculas.map((pelicula) => {
            
            const helperLinks = helperUrl(pelicula.id_pelicula, 'peliculas',
            [
                'actores', 'generos', 'clasificacion', 'comentarios', 'valoraciones'
            ])
            
            return {
                ...pelicula.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `${BASE_URL}/peliculas/${pelicula.id_pelicula}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `${BASE_URL}/peliculas/${pelicula.id_pelicula}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `${BASE_URL}/peliculas/${pelicula.id_pelicula}`
                    },
                    ...helperLinks
                ],
            }
        })

        return {
            code: 200,
            message: 'peliculas encontradas',
            links:[
                {
                    rel: 'post',
                    method: 'POST',
                    href: `${BASE_URL}peliculas`
                },
            ],
            peliculas: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener las peliculas',
            error: error.message || 'Error desconocido'
        };
    }
};

const postPelicula = async (titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer, generoIds) => {
    try {

        const pelicula = await Pelicula.create({ titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer });

        if (!pelicula || pelicula === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar la pelicula',
                error: true
            });
        };

        if (generoIds && generoIds.length > 0) {
            const generos = await Genero.findAll({ where: { id: generoIds } });
            if (generos && generos.length > 0) {
                await pelicula.addGeneros(generos);
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
            message: 'pelicula agregado correctamente',
            pelicula: pelicula
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar la pelicula',
            error: error.message || 'Error desconocido'
        });
    };
};

const putPelicula = async (id, titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer) => {
    try {

        const pelicula = await Pelicula.findByPk(id);

        if (!pelicula || pelicula === null) {
            return ({
                code: 404,
                message: 'No se encontró la pelicula a actualizar',
                error: true
            });
        };

        await Pelicula.update({ titulo, aniaLanzamiento, sinopsis, director, duracion, poster, trailer }, {
            where: { id_pelicula: id }
        });

        return ({
            code: 200,
            message: 'pelicula actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar la pelicula',
            error: error.message || 'Error desconocido'
        });
    };
};

const deletePelicula = async (req, res) => {
    try {
        const pelicula = await Pelicula.findByPk(id);

        if (!pelicula || pelicula === null) {
            return ({
                code: 404,
                message: 'No se encontró la pelicula a eliminar',
                error: true
            });
        };

        await Pelicula.destroy({
            where: { id_pelicula: id }
        });

        return ({
            code: 200,
            message: 'pelicula eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar la pelicula',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getPelicula,
    getPeliculas,
    postPelicula,
    putPelicula,
    deletePelicula
};

export default service;