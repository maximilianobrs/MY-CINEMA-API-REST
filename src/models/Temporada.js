import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Episodio from "./Episodio.js";

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

Temporada.hasMany(Episodio,{
    foreignKey: 'id_temporada',
    targetKey: 'id_temporada'
});

Episodio.belongsTo(Temporada,{
    foreignKey: 'id_temporada',
    sourceKey:'id_temporada'
});

export default Temporada;