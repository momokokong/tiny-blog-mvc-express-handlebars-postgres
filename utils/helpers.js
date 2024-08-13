// for the handlebars to render a date+time string for the posts and comments

module.exports = {
  last_updated: (date) => {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  },
};
