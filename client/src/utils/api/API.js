import axios from 'axios';

export default {
    // returns all 'saved' articles into the saved 'page'
    findAll: function() {
        return axios.get('/api/articles');
    },

    // 'creates' a new article by adding it to the saved 'page'
    create: function(articleData) {
        console.log("req: " + JSON.stringify(articleData));
        return axios.post('/api/articles', articleData);
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
       
       return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.topic}&api-key=b5cd1e91a19e4825a725b57f08281577&begin_date=${req.startYear}0101&end_date=${req.endYear}1230`)
    } 
}