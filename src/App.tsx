import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import { AroundYou } from './pages/AroundYou';
import { Home } from './pages/Home';
import { TopArtists } from './pages/TopArtists';
import { TopCharts } from './pages/TopCharts';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/around-you" element={<AroundYou />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/top-charts" element={<TopCharts />} />
      </Route>
    </Routes>
  );
};

export default App;
