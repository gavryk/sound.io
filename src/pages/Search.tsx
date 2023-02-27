import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSongsBySearch } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { HitsTrackProp } from '../redux/slices/player/types';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';
import { Songs } from '../widgets/songs-grid';

export const Search = () => {
	const dispatch = useAppDispatch();
	const { q = '' } = useParams();
	const { searchResult } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(fetchSongsBySearch(q));
	}, [dispatch, q]);

	const searchSongs = searchResult.tracks?.hits.map((song: HitsTrackProp) => song?.track);

	return (
		<>
			<TopBlock title={`Search ${q}`} />
			<Songs list={searchSongs} />
		</>
	);
};
