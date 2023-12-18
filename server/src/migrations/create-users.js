"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      bio: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 200],
        },
        defaultValue: "",
      },
      profile_img: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: "",
      },
      instagram: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      facebook: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      twitter: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      github: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      website: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      total_posts: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total_reads: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      google_auth: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
