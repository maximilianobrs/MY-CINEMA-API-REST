import { BASE_URL } from "../configs/configs.js";

export const helperUrl = (id, nombre, relaciones) => {

    const links = relaciones.map((relacion) => {
        return {
            rel:relacion,
            href: `${BASE_URL}/${nombre.toLowerCase()}/${id}/${relacion.toLowerCase()}`
        };
    });

    return links;
}