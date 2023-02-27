import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSongsBySearch } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';
import { Songs } from '../widgets/songs-grid';

export const Search = () => {
	const dispatch = useAppDispatch();
	const { q = '' } = useParams();
	const { songs } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(fetchSongsBySearch(q));
	}, [dispatch, q]);

	return (
		<>
			<TopBlock title={`Search ${q}`} />
			<Songs list={songs} />
		</>
	);
};
