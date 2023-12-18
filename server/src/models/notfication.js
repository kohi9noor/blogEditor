"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {}
  }

  Notification.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["like", "comment", "reply"]],
        },
      },
      blogId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      notification_for: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      commentId: {
        type: DataTypes.UUID,
      },
      replyId: {
        type: DataTypes.UUID,
      },
      repliedOnCommentId: {
        type: DataTypes.UUID,
      },
      seen: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Notification",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return Notification;
};
