"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      blogId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "blogs",
          key: "id",
        },
      },
      blogAuthor: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "blogs",
          key: "id",
        },
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      children: {
        type: Sequelize.ARRAY(Sequelize.UUID),
        references: {
          model: "comments",
          key: "id",
        },
      },
      commentedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      isReply: {
        type: Sequelize.BOOLEAN,
      },
      parent: {
        type: Sequelize.UUID,
        references: {
          model: "comments",
          key: "id",
        },
      },
      commentedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
        field: "commentedAt",
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
    await queryInterface.dropTable("Comments");
  },
};
