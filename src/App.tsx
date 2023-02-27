import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import { AroundYou } from './pages/AroundYou';
import { Home } from './pages/Home';
import { TopArtists } from './pages/TopArtists';
import { TopCharts } from './pages/TopCharts';
import { Search } from './pages/Search';

const App: React.FC = () => {
	library.add(fas);
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="/search/:q" element={<Search />} />
				<Route path="/around-you" element={<AroundYou />} />
				<Route path="/top-artists" element={<TopArtists />} />
				<Route path="/top-charts" element={<TopCharts />} />
			</Route>
		</Routes>
	);
};

export default App;
