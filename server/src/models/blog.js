"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init(
    {
      blog_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      banner: {
        type: DataTypes.STRING,
      },
      des: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 200],
        },
      },
      content: {
        type: DataTypes.JSONB,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      authorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      total_likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_reads: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total_parent_comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      draft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      publishedAt: {
        type: sequelize.DATE,
        defaultValue: DataTypes.NOW,
        field: "created_at",
      },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
