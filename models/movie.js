"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      year: DataTypes.INTEGER,
      picture: DataTypes.STRING,
      score: DataTypes.FLOAT,
      duration: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER
    },
    {}
  );
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Actor, { through: "MovieActors" });
    Movie.belongsTo(models.Genre, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Movie;
};
