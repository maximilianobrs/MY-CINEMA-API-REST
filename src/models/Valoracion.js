import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Valoracion = db.define('Valoracion',{
    pk_ID:{
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

//Usuario que hizo el Valoracion (clave foránea)

//Película o serie relacionada (clave foránea)

export default Valoracion;