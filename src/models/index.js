import Actor from "./Actor.js";
import Clasificacion from "./Clasificacion.js";
import Comentario from "./Comentario.js";
import Episodio from "./Episodio.js";
import Genero from "./Genero.js";
import Pelicula from "./Pelicula.js";
import Serie from "./Serie.js";
import Temporada from "./Temporada.js";
import Usuario from "./Usuario.js";
import Valoracion from "./Valoracion.js";

//Relaciones de Actor
Actor.belongsToMany(Pelicula, { through: 'ActorPelicula', foreignKey: 'id_actor' });
Pelicula.belongsToMany(Actor, { through: 'ActorPelicula', foreignKey: 'id_pelicula' });

Actor.belongsToMany(Serie, { through: 'ActorSerie', foreignKey: 'id_actor' });
Serie.belongsToMany(Actor, { through: 'ActorSerie', foreignKey: 'id_serie' });

//Relaciones de Genero
Genero.belongsToMany(Pelicula, { through: 'GeneroPelicula', foreignKey: 'id_genero' });
Pelicula.belongsToMany(Genero, { through: 'GeneroPelicula', foreignKey: 'id_pelicula' });

Genero.belongsToMany(Serie, { through: 'GeneroSerie', foreignKey: 'id_genero' });
Serie.belongsToMany(Genero, { through: 'GeneroSerie', foreignKey: 'id_serie' });

//Relaciones pelicula
Pelicula.hasOne(Clasificacion, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Clasificacion.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

Pelicula.hasMany(Comentario, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Comentario.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

Pelicula.hasMany(Valoracion, { foreignKey: 'id_pelicula', sourceKey: 'id_pelicula' });
Valoracion.belongsTo(Pelicula, { foreignKey: 'id_pelicula', targetKey: 'id_pelicula' });

//Relaciones serie
Serie.hasOne(Clasificacion, { foreignKey: 'id_serie', sourceKey: 'id_serie' });
Clasificacion.belongsTo(Serie, { foreignKey: 'id_serie', targetKey: 'id_serie' });

Serie.hasMany(Comentario, { foreignKey: 'id_serie', sourceKey: 'id_serie' });
Comentario.belongsTo(Serie, { foreignKey: 'id_serie', targetKey: 'id_serie' });

Serie.hasMany(Temporada, { foreignKey: 'id_serie', sourceKey: 'id_serie' });
Temporada.belongsTo(Serie, { foreignKey: 'id_serie', targetKey: 'id_serie' });

Serie.hasMany(Valoracion, { foreignKey: 'id_serie', sourceKey: 'id_serie' });
Valoracion.belongsTo(Serie, { foreignKey: 'id_serie', targetKey: 'id_serie' });

//Relaciones temporada
Temporada.hasMany(Episodio, { foreignKey: 'id_temporada', sourceKey: 'id_temporada' });
Episodio.belongsTo(Temporada, { foreignKey: 'id_temporada', targetKey: 'id_temporada' });

export {
    Serie,
    Pelicula,
    Clasificacion,
    Comentario,
    Temporada,
    Valoracion
  };