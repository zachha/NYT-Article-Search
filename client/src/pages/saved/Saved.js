import "./Saved.css";
import React, { Component } from "react";
import API from "../../utils/api/API";

export default class Saved extends Component {

    state = {
    articles: []
    };

  componentDidMount() {
    API.findAll()
    .then(res => {
      this.setState( {
        books: res.data
      });
    })
    .catch(err => console.log(err));
  }

    render() {
        return(
            <div>
            </div>
        )
    }
}

