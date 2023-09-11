import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Pelicula from "./Pelicula.js";
import Serie from "./Serie.js";

const Actor = db.define('Actor', {
    id_actor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        tableName: 'Actor',
        timestamps: false
    });

Actor.belongsToMany(Pelicula, { through: 'ActorPelicula', foreignKey: 'id_actor' });
Pelicula.belongsToMany(Actor, { through: 'ActorPelicula', foreignKey: 'id_pelicula' });

Actor.belongsToMany(Serie, { through: 'ActorSerie', foreignKey: 'id_actor' });
Serie.belongsToMany(Actor, { through: 'ActorSerie', foreignKey: 'id_serie' });

export default Actor;