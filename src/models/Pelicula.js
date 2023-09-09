import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Genero from "./Genero.js";

const Pelicula = db.define('Pelicula',{
    id_pelicula:{
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
    director:{
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
    tableName:'Pelicula',
    timestamps: false
});

Pelicula.belongsToMany(Genero,{
    through: 'PeliculaGenero',
    foreignKey: 'id_pelicula',
    otherKey: 'id_genero',
});

Genero.belongsToMany(Pelicula,{
    through: 'PeliculaGenero',
    foreignKey: 'id_genero',
    otherKey: 'id_pelicula',
});

export default Pelicula;