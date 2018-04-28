import './Results.css';
import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default class Results extends Component {
    render(props) {
        return(
            <div className="resultCards">
                <Card>
                    <CardHeader className="bg-dark text-light">
                    {this.props.title}
                    </CardHeader>
                    <CardBody>
                        <CardTitle>{this.props.author}
                            <Button 
                            color="primary" 
                            id="articleBtn"
                            onClick={() => {
                                  this.props.saveFunction(this.props._id, this.props.title, this.props.author, this.props.summary, this.props.date, this.props.url);
                                }}>
                            {this.props.button}
                            </Button>
                        </CardTitle>
                        <CardText>{this.props.date}</CardText>
                        <CardText>{this.props.summary}</CardText>
                        <a href={this.props.url} target="_blank">Link to Article
                        </a>

                    </CardBody>
                </Card>
            </div>
        )
    }
}