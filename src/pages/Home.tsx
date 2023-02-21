import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTopCharts } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';
import { Songs } from '../widgets/songs-grid';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { songs } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(fetchTopCharts());
	}, [dispatch]);

	return (
		<>
			<TopBlock title="Discover" showFilter />
			<Songs list={songs} />
		</>
	);
};
