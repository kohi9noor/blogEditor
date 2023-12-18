"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
      blogId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "blogs",
          key: "id",
        },
      },
      blogAuthor: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "blogs",
          key: "id",
        },
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      children: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        references: {
          model: "comments",
          key: "id",
        },
      },
      commentedBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      isReply: {
        type: DataTypes.BOOLEAN,
      },
      parent: {
        type: DataTypes.UUID,
        references: {
          model: "comments",
          key: "id",
        },
      },
      commentedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: "commentedAt",
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
