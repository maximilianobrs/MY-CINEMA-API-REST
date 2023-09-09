import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Pelicula from "./Pelicula.js";
import Serie from "./Serie.js";

const Clasificacion = db.define('Clasificacion',{
    id_clasificacion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:'Clasificacion',
    timestamps: false
});

Clasificacion.belongsTo(Pelicula, {
    foreignKey: 'id_pelicula',
    targetKey: 'id_clasificacion'
});

Pelicula.hasOne(Clasificacion, {
    foreignKey: 'id_pelicula',
    sourceKey: 'id_clasificacion'
});

Clasificacion.belongsTo(Serie, {
    foreignKey: 'id_serie',
    targetKey: 'id_clasificacion'
});

Serie.hasOne(Clasificacion, {
    foreignKey: 'id_serie',
    sourceKey: 'id_clasificacion'
});

export default Clasificacion;