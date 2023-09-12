import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Usuario = db.define('Usuario',{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    userName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    rol:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fechaNacimiento:{
        type: DataTypes.DATE,
        allowNull:false
    },

},
{
    tableName:'Usuario',
    timestamps: false
})

export default Usuario;