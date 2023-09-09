import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Temporada = db.define('Temporada',{
    pk_ID:{
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

//realcion 1 a 1 serie

export default Temporada;