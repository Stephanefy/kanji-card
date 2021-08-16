import React from 'react';

import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Nav from './components/Nav';
import Card from './components/card/Card';
import Quizz from './components/quizz/Quizz';
import Footer from './components/Footer';

import './styles/App.css'
import './styles/haru-theme.css';

function App() {


  return (
    <>
    <Layout className="App">
      <Card/>
    </Layout>         
    <Router>
      <Switch>
      </Switch>
    </Router>
    </>
  );
}

export default App;
