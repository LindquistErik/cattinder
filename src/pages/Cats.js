import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Cats extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <p>Cats</p>
        <h2>Welcome to our Cats Page</h2>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.cats.map((cat,index) => {
                return (
                  <ListGroupItem key={index} header={<Link to={`/cats/${cat.id}`}><h4><span className='cat-name'>
                  {cat.name}</span>- <small className='cat-age'>{cat.age} years old</small></h4></Link> }>
                  <span className = 'cat-enjoys'>{cat.enjoys}</span>
                  </ListGroupItem>
                )
              })}
              </ListGroup>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Cats;
