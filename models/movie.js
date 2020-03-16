'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    score: DataTypes.FLOAT
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};