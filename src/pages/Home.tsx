import { useEffect } from 'react';
import { fetchSongs } from '../redux/slices/player/asyncSongs';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';

export const Home = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchSongs());
	}, [dispatch]);

	return (
		<>
			<TopBlock title="Discover" showFilter />
		</>
	);
};
