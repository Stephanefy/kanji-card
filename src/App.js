import React from 'react';

import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


import Card from './components/card/Card';
import Quizz from './pages/quizz/Quizz';
import Kanjis from './pages/kanjis';
import KanjiList from './pages/kanjis/KanjiList';
import Footer from './components/Footer';

import './styles/App.css'
import './styles/haru-theme.css';

function App() {


  return (
    <>
      <Router>
        <Layout className="App">
            <Switch>
              <Route path="/quizz">
                <Quizz/>
              </Route>
              <Route path="/les-kanjis">
                <Kanjis/>
              </Route>
              <Route path="/gakushu-kanji/:params">
                <KanjiList/>
              </Route>
              <Route path="/">
                <Card/>
              </Route>
            </Switch>
        </Layout>         
      </Router>
    </>
  );
}

export default App;
