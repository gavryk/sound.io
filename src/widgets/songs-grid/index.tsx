import React from 'react';
import { useSelector } from 'react-redux';
import { UICard, UIGrid, UITypography } from '../../components';
import { SkeletonCard } from '../../components/ui-card/skeleton-card';
import { SongProp } from '../../redux/slices/player/types';
import { settingsSelector } from '../../redux/slices/settings/selector';
import styles from './styles.module.scss';

interface SongsProps {
	list: SongProp[];
}

export const Songs: React.FC<SongsProps> = ({ list }) => {
	const { isLoaded } = useSelector(settingsSelector);

	const songsItems = list.map((song) => <UICard {...song} key={song.key} />);
	const skeleton = [...new Array(9)].map((_, index) => <SkeletonCard key={index} />);

	return isLoaded === 'error' ? (
		<UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
			Sorry, we couldn't get songs. Please try again later.
		</UITypography>
	) : (
		<div className={styles.resultWrapper}>
			<UIGrid columns={3} gridGap={5}>
				{isLoaded === 'success' ? songsItems : skeleton}
			</UIGrid>
		</div>
	);
};