import React, { Component } from 'react';
import { getCat } from '../api'

class ShowCat extends Component {
  constructor(props){
    super(props)
    this.state={
      cat: undefined
    }
  }
  render(){
    let cat = this.state.cat
    //in our render, we can conditionally return jsx by setting an if statement to an undefined object. else it'll load what we want.
    if(cat == undefined) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div>
          <img style={{height:200}} src={(cat.picture) ? cat.picture : 'https://xibo.org.uk/img/svg/Home/icon_home_git_dark.svg'} />
          <h1>{cat.name}, <small>{cat.age} years old</small></h1>
          <h3>{cat.enjoys}</h3>
        </div>
      )}
  }

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    getCat(id)
    .then((cat) => {
      this.setState({cat})
      //we exit the promise by setting state.
    })
  }
}


export default ShowCat;
