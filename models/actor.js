"use strict";
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    "Actor",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
      nationality: DataTypes.STRING
    },
    {}
  );
  Actor.associate = function(models) {
    // associations can be defined here
    Actor.belongsToMany(models.Movie, { through: "MovieActor" });
  };
  return Actor;
};
