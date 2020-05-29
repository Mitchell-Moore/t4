import React, { Component } from 'react'
import { Card } from "react-bootstrap";


export default class card extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: "18rem" }} onClick={() => this.props.handleOnClick()}>
                    <Card.Body>
                    <Card.Title>{this.props.movie.title} </Card.Title>
                    <Card.Text> <b>Direcor </b>  : {this.props.movie.director} </Card.Text>
                    <Card.Text> <b>Year Released  </b>  : {this.props.movie.release_year} </Card.Text>
                    </Card.Body>
               </Card>
            </div>
        )
    }
}
