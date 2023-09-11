import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Episodio = db.define('Episodio',{
    id_episodio:{
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

export default Episodio;