import { isFulfilled } from '@reduxjs/toolkit';
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
	const { geo } = useSelector(geoLocationSelector);
	const { songs } = useSelector(playerSelector);

	useEffect(() => {
		const loadData = async () => {
			const action = await dispatch(getGeoLocation());
			if (isFulfilled(action)) {
				dispatch(fetchSongsAround(action.payload.country_code2));
			}
		};
		loadData();
	}, [dispatch]);

	return (
		<>
			<TopBlock title={`Around You (${geo.country_name})`} />
			<Songs list={songs} />
		</>
	);
};
