import React from 'react';
import { useSelector } from 'react-redux';
import { ArtistCard, Loader, UIGrid, UITypography } from '../../components';
import { SongProp } from '../../redux/slices/player/types';
import { settingsSelector } from '../../redux/slices/settings/selector';
import styles from './styles.module.scss';

interface SongsProps {
	list: SongProp[];
}

export const Artists: React.FC<SongsProps> = ({ list }) => {
	const { isLoaded } = useSelector(settingsSelector);

	return isLoaded === 'error' ? (
		<UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
			Sorry, we couldn't get songs. Please try again later.
		</UITypography>
	) : (
		<div className={styles.resultWrapper}>
			{isLoaded === 'success' ? (
				<UIGrid columns={5} gridGap={10}>
					{list?.map((song, i) => {
						return <ArtistCard {...song} key={song.key} />;
					})}
				</UIGrid>
			) : (
				<Loader />
			)}
		</div>
	);
};
