import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Temporada from "./Temporada.js";

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

Episodio.belongsTo(Temporada,{
    foreignKey: 'id_episodio',
    sourceKey: 'id_episodio'
});

Temporada.hasMany(Episodio,{
    foreignKey: 'id_episodio',
    sourceKey: 'id_episodio'
});

export default Episodio;