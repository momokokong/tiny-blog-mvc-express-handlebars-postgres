// Post
// - id
//   -Integer.
//   - Doesn't allow null values.
//   - Set as primary key.
//   - Uses auto increment.
// - title
//   - String.
//   - Doesn't allow null values.
// - content
//   - String.
//   - Doesn't allow null values.
// - user_id
//   - Integer.
//   - References the User model's id.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Post;
