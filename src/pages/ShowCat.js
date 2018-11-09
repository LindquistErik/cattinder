import React, { Component } from 'react';

class ShowCat extends Component {
  constructor(props){
    super(props)
    this.state={
      cats: this.props.cats,
      id: this.props.match.params.id
    }
  }
  componentWillMount(){
    const id = this.state.id
    console.log(id)
  }
  render(){
      let { cats, id } = this.state
      let cat = cats[id-1]
    return(
      <div>
        <img style={{height:200}} src={cat.picture} />
        <h1>{cat.name}, <small>{cat.age} years old</small></h1>
        <h3>{cat.enjoys}</h3>
      </div>
    )

  }
}


export default ShowCat;
