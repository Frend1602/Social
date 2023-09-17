import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import DialogPage from './components/dialog-page/dialog-page';
import MainPage from './components/main-page/main-page';
import NewPage from './components/news-page/news-page';

function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav />
        <Routes>
          <Route path="/main-page" element={< MainPage data={props.data} dispatch={props.dispatch} />} />
          <Route path="/dialog-page" element={<DialogPage data={props.data} dispatch={props.dispatch} />} />
          <Route path="/news-page" element={<NewPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
