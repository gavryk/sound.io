import React from 'react';
import { useSelector } from 'react-redux';
import { Loader, UICard, UIGrid, UITypography } from '../../components';
import { playerSelector } from '../../redux/slices/player/selector';
import { playPause, setActiveSong } from '../../redux/slices/player/slice';
import { SongProp } from '../../redux/slices/player/types';
import { settingsSelector } from '../../redux/slices/settings/selector';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

interface SongsProps {
	list: SongProp[];
}

export const Songs: React.FC<SongsProps> = ({ list }) => {
	const dispatch = useAppDispatch();
	const { isLoaded } = useSelector(settingsSelector);
	const { isPlaying, activeSong } = useSelector(playerSelector);

	const handleStartStop = (song: SongProp, i: number) => {
		dispatch(setActiveSong({ song, i }));
		dispatch(playPause(song.title === activeSong.title ? !isPlaying : true));
	};

	const songsItems = list.map((song, i) => (
		<UICard {...song} key={song.key} clickHandler={() => handleStartStop(song, i)} />
	));

	return isLoaded === 'error' ? (
		<UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
			Sorry, we couldn't get songs. Please try again later.
		</UITypography>
	) : (
		<div className={styles.resultWrapper}>
			<UIGrid columns={5} gridGap={5}>
				{isLoaded === 'success' ? songsItems : <Loader />}
			</UIGrid>
		</div>
	);
};
