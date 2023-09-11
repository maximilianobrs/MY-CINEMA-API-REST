import db from "../db/db.js";
import { DataTypes } from "sequelize";

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

export default Actor;