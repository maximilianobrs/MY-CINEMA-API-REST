import db from "../db/db.js";
import { DataTypes } from "sequelize";

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

export default Valoracion;