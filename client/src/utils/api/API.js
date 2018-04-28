import axios from 'axios';

export default {
    // returns all 'saved' articles into the saved 'page'
    findAll: function() {
        return axios.get('/api/articles');
    },

    // 'creates' a new article by adding it to the saved 'page'
    create: function() {
        return axios.get('/api/articles');
    },

    // deletes specified article
    deleteArticle: function(id) {
        return axios.delete('/api/articles/' + id);
    },

    // finds specific article by id
    findById: function(id) {
        return axios.get('/api/articles/' + id);
    },

    // searches NYT API based on user inputand returns up to 9 articles
    nytSearch: function(req) {
        axios.get(
          {
            url:
              "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
              "api-key": "b5cd1e91a19e4825a725b57f08281577",
              q: req.title,
              begin_date: req.start + "0101",
              end_date: req.end + "0101"
            }
          },
          function(err, response, body) {
            body = JSON.parse(body);
            console.log(body);
          }
        );
    } 
}