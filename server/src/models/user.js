"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      bio: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 200],
        },
        defaultValue: "",
      },
      profile_img: {
        type: DataTypes.STRING,
        defaultValue: () => {
          const collection =
            profile_imgs_collections_list[
              Math.floor(Math.random() * profile_imgs_collections_list.length)
            ];
          const seed =
            profile_imgs_name_list[
              Math.floor(Math.random() * profile_imgs_name_list.length)
            ];
          return `https://api.dicebear.com/6.x/${collection}/svg?seed=${seed}`;
        },
      },
      youtube: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      instagram: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      facebook: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      twitter: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      github: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      website: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      total_posts: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_reads: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      google_auth: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return User;
};
