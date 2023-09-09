import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Pelicula from "./Pelicula.js";
import Serie from "./Serie.js";

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

Comentario.belongsTo(Pelicula,{
    foreignKey: 'id_pelicula',
    sourceKey: 'id_comentario'
});

Pelicula.hasMany(Comentario,{
    foreignKey: 'id_comentario',
    sourceKey: 'id_pelicula'
});

Comentario.belongsTo(Serie,{
    foreignKey: 'id_serie',
    sourceKey: 'id_comentario'
});

Serie.hasMany(Comentario,{
    foreignKey: 'id_comentario',
    sourceKey: 'id_serie'
});

export default Comentario;