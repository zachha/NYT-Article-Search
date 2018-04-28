import "./Saved.css";
import React, { Component } from "react";
import API from "../../utils/api/API";
import Results from "../../components/results/Results";
import { Container } from 'reactstrap';

export default class Saved extends Component {

    state = {
    articles: []
    };

  componentDidMount() {
    API.findAll()
    .then(res => {
      this.setState({
        articles: res.data.response.docs
      });
    })
    .catch(err => console.log(err));
  }

  deleteArticle = (id) => {
    API.deleteArticle(id)
    .then(res => {
      API.findAll()
      .then(res => {
        this.setState({
          articles: res.data.response.docs
        });
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }

    render() {
        return (
          <Container id="pulledArticles">
            {this.state.articles.map(article => {
              return <Results title={article.headline.main} summary={article.snippet} author={article.byline.original} date={article.pub_date} url={article.web_url} button="Delete Article" function={this.deleteArticle(article.headline.main, article.snippet, article.author, article.pub_date, article.web_url)} />;
            })}
          </Container>
        );
    }
}

