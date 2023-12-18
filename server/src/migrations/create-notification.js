"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Notifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["like", "comment", "reply"]],
        },
      },
      blogId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Blogs",
          key: "id",
        },
      },
      notification_for: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      commentId: {
        type: Sequelize.UUID,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      replyId: {
        type: Sequelize.UUID,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      repliedOnCommentId: {
        type: Sequelize.UUID,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      seen: {
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
    await queryInterface.dropTable("Notifications");
  },
};
