'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieActor = sequelize.define('MovieActor', {
    id: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {});
  MovieActor.associate = function(models) {
    // associations can be defined here
  };
  return MovieActor;
};