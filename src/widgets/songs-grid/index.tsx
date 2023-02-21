import React from 'react';
import { useSelector } from 'react-redux';
import { UICard, UIGrid, UITypography } from '../../components';
import { SongProp } from '../../redux/slices/player/types';
import { settingsSelector } from '../../redux/slices/settings/selector';

interface SongsProps {
	list: SongProp[];
}

export const Songs: React.FC<SongsProps> = ({ list }) => {
	const { isLoaded } = useSelector(settingsSelector);

	const songsItems = list.map((song) => <UICard {...song} key={song.key} />);

	return isLoaded === 'error' ? (
		<UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
			Sorry, we couldn't get songs. Please try again later.
		</UITypography>
	) : (
		<UIGrid columns={3} gridGap={10}>
			{isLoaded === 'success' ? songsItems : ''}
		</UIGrid>
	);
};
