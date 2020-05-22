import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import { Router, Link } from '@reach/router';
import Main from './components/Main';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <div class="jumbotron pt-0 pb-5 pl-5">
          <div className="container" >
            <Link to="/"><h3><a style={{textDecoration:"underline"}} className="title">Home</a></h3></Link>
            <h2>Take a pet home!</h2>
          </div>
        </div>
      <Router>
        <Main path="/"/>
        <NewPet path="/new" />
        <EditPet path="/edit/:_id" />
        <PetInfo path="/info/:_id" />
      </Router>
    </div>
  );
}

export default App;