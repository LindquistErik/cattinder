import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css';
import ShowCat from './pages/ShowCat'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }

  submitCat = (cat) => {
    let cats = this.state.cats
    cats[cats.length] = {id: (cats.length+1), name: cat.name, age: cat.age, enjoys: cat.enjoys}
    console.log(cats)
    this.setState({cats: cats})
  }

  render() {
    return (
      <div>
            <Header />
            <Router>
                <Switch>
                    <Route path='/cats/:id' render={(props)=> <ShowCat cats={this.state.cats} {...props}/>} />
                    <Route exact path = "/cats" render={(props)=> <Cats cats={this.state.cats}/>} />
                    <Route exact path="/" render={(props)=> <NewCat submitCat={this.submitCat}/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}


export default App;
