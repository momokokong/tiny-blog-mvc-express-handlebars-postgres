module.exports = {
  last_updated: (date) => {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  },
};
