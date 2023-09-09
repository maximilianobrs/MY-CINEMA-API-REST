import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Serie from "./Serie.js";
import Pelicula from "./Pelicula.js";

const Valoracion = db.define('Valoracion',{
    id_valoracion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    puntuacion:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},
{
    tableName:'Valoracion',
    timestamps: false
});

Valoracion.belongsTo(Pelicula, {
    foreignKey: 'id_pelicula',
    targetKey: 'id_valoracion'
});

Pelicula.hasMany(Valoracion, {
    foreignKey: 'id_valoracion',
    sourceKey: 'id_pelicula'
});

Valoracion.belongsTo(Serie, {
    foreignKey: 'id_serie',
    targetKey: 'id_valoracion'
});

Serie.hasMany(Valoracion, {
    foreignKey: 'id_valoracion',
    sourceKey: 'id_serie'
});

export default Valoracion;