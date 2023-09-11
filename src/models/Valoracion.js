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

export default Valoracion;