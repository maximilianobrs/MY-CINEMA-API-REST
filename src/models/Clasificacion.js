import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Clacificaion = db.define('Clacificaion',{
    pk_ID:{
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
    tableName:'Clacificaion',
    timestamps: false
});

export default Clacificaion;