const db = require('../models');

module.exports = {
    create: (req, res) => {
        db.Article.create(req.body)
          .then(dbModel => {
              console.log("Article saved!");
              res.json(dbModel);
          })
          
          .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        db.Article
        .find(req.Query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    deleteArticle: (req, res) => {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => {
            console.log("Article Deleted!");
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
}