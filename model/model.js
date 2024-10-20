const mongoose = require('mongoose');

const comicBookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  pages: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'used'], default: 'new' },
  description: { type: String },
});

module.exports = mongoose.model('ComicBook', comicBookSchema);
