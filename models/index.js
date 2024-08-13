// A user can have many posts.  A post belongs to one user.
// A user can have many comments.  A comment belongs to one user.
// A post can have many comments.  A comment belongs to one post.

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Post, Comment };
