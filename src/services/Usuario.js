import { Usuario } from "../models/index.js";

const getUsuario = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id);

        if (usuario.length === 0) {
            return {
                code: 404,
                message: 'No se encontro el usuario',
                error: true
            };
        }

        const result = {
            ...usuario.dataValues,
            links: [
                {
                    rel: 'post',
                    method: 'POST',
                    href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                },
                {
                    rel: 'update',
                    method: 'PUT',
                    href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                },
                {
                    rel: 'delete',
                    method: 'DELETE',
                    href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                },
            ],
        }

        return {
            code: 200,
            message: 'usuario encontrado',
            usuarios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener el usuario',
            error: error.message || 'Error desconocido'
        };
    }
};

const getUsuarios = async () => {
    try {
        const usuarios = await Usuario.findAll();

        if (usuarios.length === 0) {
            return {
                code: 404,
                message: 'No se encontraron los usuarios',
                error: true
            };
        }

        const result = usuarios.map((usuario) => {
            return {
                ...usuario.dataValues,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                    },
                    {
                        rel: 'post',
                        method: 'POST',
                        href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                    },
                    {
                        rel: 'update',
                        method: 'PUT',
                        href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                    },
                    {
                        rel: 'delete',
                        method: 'DELETE',
                        href: `http://localhost:${PORT}/api/v1/usuarios/${usuario.id_usuario}`
                    },
                ],
            }
        })

        return {
            code: 200,
            message: 'usuarios encontradas',
            usuarios: result
        };

    } catch (error) {
        return {
            code: error.code || 500,
            message: 'Ocurrió un error al obtener los usuarios',
            error: error.message || 'Error desconocido'
        };
    }
};

const postUsuario = async (userName, nombre, apellido, email, password, rol, fechaNacimiento) => {
    try {
        const usuario = await Usuario.create({ userName, nombre, apellido, email, password, rol, fechaNacimiento });

        if (!usuario || usuario === null) {
            return ({
                code: 404,
                message: 'No se pudo agregar el usuario',
                error: true
            });
        };

        return {
            code: 200,
            message: 'usuario agregado correctamente',
            usuario: usuario
        };

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al agregar el usuario',
            error: error.message || 'Error desconocido'
        });
    };
};

const putUsuario = async (id, userName, nombre, apellido, email, password, rol, fechaNacimiento) => {
    try {

        const usuario = await Usuario.findByPk(id);

        if (!usuario || usuario === null) {
            return ({
                code: 404,
                message: 'No se encontró el usuario a actualizar',
                error: true
            });
        };

        await usuario.update({ userName, nombre, apellido, email, password, rol, fechaNacimiento }, {
            where: { id_usuario: id }
        });

        return ({
            code: 200,
            message: 'usuario actualizado correctamente',
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrió un error al actualizar el usuario',
            error: error.message || 'Error desconocido'
        });
    };
};

const deleteUsuario = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario || usuario === null) {
            return ({
                code: 404,
                message: 'No se encontró el usuario a eliminar',
                error: true
            });
        };

        await usuario.destroy({
            where: { id_usuario: id }
        });

        return ({
            code: 200,
            message: 'usuario eliminado correctamente'
        });

    } catch (error) {
        return ({
            code: error.code || 500,
            message: 'Ocurrio un error al eliminar el usuario',
            error: error.message || 'Error desconocido'
        });
    };
};

const service = {
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
};

export default service;