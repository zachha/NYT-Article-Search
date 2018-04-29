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
      console.log(res);
      this.setState({
        articles: res.data
      });
    })
    .catch(err => console.log(err));
  }

  deleteArticle = (id) => {
    console.log(id);
    API.deleteArticle(id)
    .then(res => {
      API.findAll()
      .then(res => {
        this.setState({
          articles: res.data
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
              console.log('article: ' + JSON.stringify(article));
              return <Results 
              title={article.title} 
              summary={article.summary} 
              author={article.author} 
              date={article.date} 
              url={article.url} 
              id={article._id}
              button="Delete Article" 
              saveFunction={this.deleteArticle} />;
            })}
          </Container>
        );
    }
}

