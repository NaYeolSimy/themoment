import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout';
import Home from './features/home/index';
import LogIn from './features/logIn/index';
import Register from './features/register';
import Album from './features/album/index';
import Main from './features/album/main';
import AlbumDetail from './features/album/albumDetail';
import Section from './components/Layout/Section';
import PhotoDetail from './features/album/photoDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route element={<Section />}>
            <Route path="/main" element={<Main />} />
            <Route path="/album/:name" element={<AlbumDetail />} />
          </Route>
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
