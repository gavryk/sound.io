import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTopCharts } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { useAppDispatch } from '../redux/store';
import { Artists, TopBlock } from '../widgets';

export const TopArtists = () => {
	const dispatch = useAppDispatch();
	const { songs } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(fetchTopCharts());
	}, [dispatch]);

	return (
		<>
			<TopBlock title="Top Artists" />
			<Artists list={songs} />
		</>
	);
};
