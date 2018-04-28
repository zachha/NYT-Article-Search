import "./FormLayout.css";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import axios from 'axios';
import API from '../../utils/api/API';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';
import Results from "../results/Results";

export default class FormLayout extends Component {

    state = {
    topic: "",
    startYear: "2018",
    endYear: "2018",
    articles: [],
    isValid: true
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.topic) {
      this.setState({
        isValid: true
      });
      API.nytSearch(this.state)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({ articles: res.data.response.docs });
        })
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }

  saveArticle = (title, author, summary, date, url) => {
    API.saveArticle({
      title: title,
      author: author,
      date: date,
      summary: summary,
      url: url
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }


  render() {
      return <Container id="formLayout">
          <Card>
            <CardHeader>
              <h4>Search the NYT for Articles:</h4>
            </CardHeader>
            <CardBody>
              <Container>
                <Form>
                  <FormGroup>
                    <Label for="topic">* Topic:</Label>
                    <Input type="text" name="topic" value={this.state.topic} onChange={this.onChange} placeholder="Topic" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="startYear"> Start Year:</Label>
                    <Input type="text" name="startYear" value={this.state.startYear} onChange={this.onChange} placeholder="StartYear" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="endYear"> End Year:</Label>
                    <Input type="text" name="author" value={this.state.endYear} onChange={this.onChange} placeholder="endYear" />
                  </FormGroup>
                  <Button onClick={this.onSubmit} color="primary" id="searchBtn">
                    Search Articles
                  </Button>
                  <h5>
                    <Link to="/saved" id="bookmark">
                      <FontAwesomeIcon icon="bookmark" /> See Saved Articles
                    </Link>
                  </h5>
                </Form>
              </Container>
            </CardBody>
          </Card>
          <br />
          {!this.state.isValid && <Alert color="danger">
              Please input a topic to search for.
            </Alert>}

          <Container id="pulledArticles">
            {this.state.articles.map(article => {
              return <Results 
              title={article.headline.main} 
              summary={article.snippet} 
              author={article.byline.original} 
              date={article.pub_date} 
              url={article.web_url} 
              button="Save Article" 
              key={article.headline.main}
              function={() => this.saveArticle(article.headline.main, article.byline.original, article.pub_date, article.snippet, article.web_url)}
              />;
            })}
          </Container>
        </Container>;
  }
}

