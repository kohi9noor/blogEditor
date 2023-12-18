"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Blogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      blog_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
      },
      des: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 200], //Maximum length of 200 charactors
        },
      },
      content: {
        type: Sequelize.JSONB,
      },
      tags: {
        type: Sequelize.ARRAY(DataTypes.STRING),
      },
      authorId: {
        type: Sequelize.UUID, // Assuming you are using uuid for userId
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      total_likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total_comments: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total_reads: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total_parent_comments: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      draft: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      publishedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "created_at", // Map to the publishedAt field
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Blogs");
  },
};
