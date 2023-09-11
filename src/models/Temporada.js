import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Temporada = db.define('Temporada',{
    id_temporada:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    numeroTemporadas:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    aniaLanzamiento:{
        type: DataTypes.DATE,
        allowNull:false
    },
},
{
    tableName:'Temporada',
    timestamps: false
});


export default Temporada;