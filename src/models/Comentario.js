import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Comentario = db.define('Comentario',{
    id_comentario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    comentario:{
        type: DataTypes.STRING,
        allowNull:false
    },
    puntuacion:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},
{
    tableName:'Comentario',
    timestamps: false
});

export default Comentario;