import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Pelicula from "./Pelicula.js";
import Serie from "./Serie.js";

const Genero = db.define('Genero', {
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: 'Genero',
        timestamps: false
    });

Genero.belongsToMany(Pelicula, { through: 'GeneroPelicula', foreignKey: 'id_genero' });
Pelicula.belongsToMany(Genero, { through: 'GeneroPelicula', foreignKey: 'id_pelicula' });

Genero.belongsToMany(Serie, { through: 'GeneroSerie', foreignKey: 'id_genero' });
Serie.belongsToMany(Genero, { through: 'GeneroSerie', foreignKey: 'id_serie' });

export default Genero;