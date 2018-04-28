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
        .then(res => this.props.history.push("/")) // redirect to home page
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }


  render() {
      return (
    <Container id="formLayout">
      <Card>
        <CardHeader>
          <h4>Search the NYT for Articles:</h4>
        </CardHeader>
        <CardBody>
          <Container>
            <h5>
              <Link to="/saved">
                <FontAwesomeIcon icon="bookmark" /> See Saved Articles
              </Link>
            </h5>
            <Form>
              <FormGroup>
                <Label for="topic">* Topic:</Label>
                <Input type="text" name="topic" value={this.state.topic} onChange={this.onChange} placeholder="Topic" />
              </FormGroup>
              <FormGroup>
                <Label for="startYear"> Start Year:</Label>
                <Input type="" name="startYear" value={this.state.startYear} onChange={this.onChange} placeholder="StartYear" />
              </FormGroup>
              <FormGroup>
                <Label for="endYear"> End Year:</Label>
                <Input type="text" name="author" value={this.state.endYear} onChange={this.onChange} placeholder="endYear" />
              </FormGroup>
              <Button onClick={this.onSubmit} color="primary">
                Search Articles
              </Button>
            </Form>
          </Container>
        </CardBody>
      </Card>
      <br />
      {!this.state.isValid && <Alert color="danger">
          Please input a topic to search for.
        </Alert>}
    </Container>
      )
  }
}

