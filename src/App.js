import React from 'react';

import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


import HomePage from './pages/Home'
import Quizz from './pages/quizz';
import Kanjis from './pages/kanjis';
import KanjiList from './pages/kanjis/KanjiList';
import Footer from './components/Footer';
import DictionaryIndexPage from './pages/Dictionary';

import './styles/App.css'
import './styles/haru-theme.css';




function App() {



  return (
    <>
      <Router>
        <Layout className="App">
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/quizz">
                <Quizz/>
              </Route>
              <Route path="/les-kanjis">
                <Kanjis/>
              </Route>
              <Route path="/dictionnaire">
                <DictionaryIndexPage/>
              </Route>
              <Route path="/gakushu-kanji/:params">
                <KanjiList/>
              </Route>
            </Switch>
        </Layout>         
      </Router>
    </>
  );
}

export default App;
