import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Episodio = db.define('Episodio',{
    pk_ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    numeroEpisodio:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    sinopsis:{
        type: DataTypes.STRING,
        allowNull:false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:'Episodio',
    timestamps: false
});

//realcion 1 a 1 temporada pertenece

export default Episodio;