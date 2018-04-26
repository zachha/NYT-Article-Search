const router = require('express').Router();
const articleController = require('../controllers/articleController');


router.route("/api/articles")
  .get(articleController.findAll)
  .post(articleController.create)
  .delete(articleController.deleteArticle)
    
router.route("/api/:id")
    .get(articleController.findById)
    