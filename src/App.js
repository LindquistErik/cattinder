import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css';
import ShowCat from './pages/ShowCat'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import { getCats, createCat } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [],
      newCatSuccess: false
    }
  }

  submitCat = (cat) => {
    let cats = this.state.cats
    cats[cats.length] = {id: (cats.length+1), name: cat.name, age: cat.age, enjoys: cat.enjoys}
    console.log(cats)
    this.setState({cats: cats})
  }

  componentWillMount() {
    getCats()
    .then(APIcats => {
      this.setState({
        cats: APIcats
      })
    });
  }


  render() {
    return (
      <div>
            <Header />
            <Router>
                <Switch>
                    <Route path='/cats/:id' component={ShowCat} />
                    <Route exact path = "/cats" render={(props)=> <Cats cats={this.state.cats}/>} />
                    <Route exact path="/" render={(props)=> <NewCat submitCat={this.submitCat} handleNewCat={this.handleNewCat} success={this.state.newCatSuccess}/> } />
                </Switch>
            </Router>
        </div>
    );
  }

  handleNewCat = (newCatInfo) => {
    console.log("New Cat TRY", newCatInfo)
    createCat(newCatInfo)
    .then(successCat => {
      console.log("SUCCESS! New cat: ", successCat);
      this.setState({
          newCatSuccess: true
      })
    })
  }
}


export default App;


// {
//   id: 1,
//   name: 'Morris',
//   age: 2,
//   enjoys: "Long walks on the beach.",
//   picture: "https://www.publicdomainpictures.net/pictures/20000/velka/funny-cat-871298226790TvQ.jpg"
// },
// {
//   id: 2,
//   name: 'Paws',
//   age: 4,
//   enjoys: "Snuggling by the fire.",
//   picture: "https://www.thehappycatsite.com/wp-content/uploads/2017/11/funny.jpg"
// },
// {
//   id: 3,
//   name: 'Mr. Meowsalot',
//   age: 12,
//   enjoys: "Being in charge.",
//   picture: "https://www.thehappycatsite.com/wp-content/uploads/2017/11/funny5.jpg"
// },
// {
//   id: 4,
//   name: 'No Name',
//   age: 8,
//   enjoys: "Being mysterious.",
//   picture: "https://www.ekahiornish.com/wp-content/uploads/2018/07/default-avatar-profile-icon-vector-18942381.jpg"
// }
