import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Genero from "./Genero.js";
import Temporada from "./Temporada.js";

const Serie = db.define('Serie',{
    id_serie:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    aniaLanzamiento:{
        type: DataTypes.DATE,
        allowNull:false
    },
    genero:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sinopsis:{
        type: DataTypes.STRING,
        allowNull:false
    },
    creador:{
        type: DataTypes.STRING,
        allowNull:false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    clasificacion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    poster:{
        type: DataTypes.STRING,
        allowNull:false
    },
    trailer:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:'Serie',
    timestamps: false
});

Serie.belongsToMany(Genero,{
    through: 'SerieGenero',
    foreignKey: 'id_serie',
    otherKey: 'id_genero',
});

Genero.belongsToMany(Serie,{
    through: 'SerieGenero',
    foreignKey: 'id_genero',
    otherKey: 'id_serie',
});

Serie.hasMany(Temporada,{
    foreignKey: 'id_serie',
    targetKey: 'id_serie'
});

Temporada.belongsTo(Serie,{
    foreignKey: 'id_serie',
    sourceKey:'id_serie'
});

export default Serie;