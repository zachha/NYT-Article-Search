const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Article', ArticleSchema);