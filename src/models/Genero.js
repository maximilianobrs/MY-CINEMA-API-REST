import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Genero = db.define('Genero',{
    id_genero:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    genero:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:'Genero',
    timestamps: false
});

export default Genero;