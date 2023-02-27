import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGeoLocation } from '../redux/slices/geo/asyncGeo';
import { geoLocationSelector } from '../redux/slices/geo/selector';
import { fetchSongsAround } from '../redux/slices/player/asyncSongs';
import { playerSelector } from '../redux/slices/player/selector';
import { useAppDispatch } from '../redux/store';
import { TopBlock } from '../widgets';
import { Songs } from '../widgets/songs-grid';

export const AroundYou = () => {
	const dispatch = useAppDispatch();
	const { userLocation } = useSelector(geoLocationSelector);
	const { songs } = useSelector(playerSelector);

	useEffect(() => {
		dispatch(getGeoLocation());
		dispatch(fetchSongsAround(userLocation.country_code2));
	}, [dispatch]);

	return (
		<>
			<TopBlock title={`Around You (${userLocation.country_name})`} />
			<Songs list={songs} />
		</>
	);
};
