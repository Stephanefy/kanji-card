import React from 'react';

import Layout from './components/Layout';

import {
  BrowserRouter,
  Routes,
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
import { LearningListContextProvider } from './context/LearningListContext';




function App() {



  return (
    <>
      <BrowserRouter>
          <LearningListContextProvider>
        <Layout className="App">
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/quizz" element={<Quizz/>}/>
              <Route path="/les-kanjis" element={<Kanjis/>} />
              <Route path="/dictionnaire" element={<DictionaryIndexPage/>} />
              <Route path="/gakushu-kanji/:params" element={<KanjiList/>} />
            </Routes>
        </Layout>         
          </LearningListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
