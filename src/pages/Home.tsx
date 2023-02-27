import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchSongsByGenre } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';
import { Songs } from '../widgets/songs-grid';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { songs, genresFilter } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(fetchSongsByGenre(genresFilter.value));
	}, [dispatch, genresFilter]);

	return (
		<>
			<TopBlock title="Discover" showFilter />
			<Songs list={songs} />
		</>
	);
};
