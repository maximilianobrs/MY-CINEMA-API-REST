import { SECRET_PASS } from '../configs/configs.js';
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    let { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    try {
        let [type, token] = authorization.split(" ");

        if (type === 'Bearer' || type === "Token") {

            jwt.verify(token, SECRET_PASS, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Acceso no autorizado' });
                }
                req.user = decoded.skater;
                next();
            });

        } else {

            return res.status(401).json({ message: 'Tipo de token no válido' });

        }

    } catch (error) {
        return res.status(500).json({ code: error.code || 500, message: 'Ocurrió un error interno', error: error.message || 'Error desconocido' });
    }
};