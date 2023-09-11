import db from "../db/db.js";
import { DataTypes } from "sequelize";

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

export default Clasificacion;