// Comment
// - id
//   - Integer.
//   - Doesn't allow null values.
//   - Set as primary key.
//   - Uses auto increment.
// content
//   - String.
//   - Doesn't allow null values.
// - post_id
//   - Integer.
//   - References the Post model's id.
// - user_id
//   - Integer.
//   - References the User model's id.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Comment;
