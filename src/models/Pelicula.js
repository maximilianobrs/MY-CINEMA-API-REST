import db from "../db/db.js";
import { DataTypes } from "sequelize";
import Clasificacion from "./Clasificacion.js";
import Comentario from "./Comentario.js";
import Valoracion from "./Valoracion.js";

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

Pelicula.hasOne(Clasificacion, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Clasificacion.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

Pelicula.hasMany(Comentario, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Comentario.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

Pelicula.hasMany(Valoracion, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Valoracion.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

export default Pelicula;