import React, { Component } from 'react';

class ShowCat extends Component {
  constructor(props){
    super(props)
    this.state={
      cats: this.props.cats
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    console.log(id)
  }
  render(){

    return(
      <div>

      </div>
    )

  }
}


export default ShowCat;
