const { Post } = require('../models');

const postdata = [
  {
    title: "First Post!",
    content: "This is my very first blog post. Excited to share my thoughts with the world!",
    user_id: 1 
  },
  {
    title: "Hello World",
    content: "Just testing out this blogging platform. Seems pretty cool so far.",
    user_id: 2 
  },
  {
    title: "My Travel Adventures",
    content: "Sharing some highlights from my recent trip to Europe. Amazing experience!",
    user_id: 1 
  },
  {
    title: "Tech Trends",
    content: "Discussing the latest trends in technology and their potential impact on society.",
    user_id: 2 
  },
  {
    title: "Food for Thought",
    content: "Sharing some philosophical musings and thought-provoking questions.",
    user_id: 1 
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
