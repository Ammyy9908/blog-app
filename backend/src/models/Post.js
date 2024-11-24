const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  readTime: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  excerpt: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema); 