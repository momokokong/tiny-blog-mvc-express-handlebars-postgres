const { Comment } = require('../models');

const commentData = [
  {
    content: "Great post, Alice! Looking forward to reading more from you.",
    post_id: 3, 
    user_id: 2 
  },
  {
    content: "Interesting perspective, Bob. I'll have to check out this platform myself.",
    post_id: 2, 
    user_id: 1 
  },
  {
    content: "Wow, those photos are stunning! Thanks for sharing your travel stories.",
    post_id: 3, 
    user_id: 2 
  },
  {
    content: "Thought-provoking post! It really made me think about the implications of these tech trends.",
    post_id: 4, 
    user_id: 1 
  },
  {
    content: "I completely agree with your points about the importance of staying informed about technology.",
    post_id: 4, 
    user_id: 2 
  },
  {
    content: "These questions are so deep! I've been pondering them all day.",
    post_id: 5, 
    user_id: 2 
  },
  {
    content: "Philosophy is such a fascinating subject. Thanks for sharing your insights.",
    post_id: 5, 
    user_id: 1 
  },
  {
    content: "I'm so glad you enjoyed your trip! Europe is definitely on my bucket list.",
    post_id: 3, 
    user_id: 1 
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
