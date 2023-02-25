import React from 'react';
import { SongProp } from '../../../../redux/slices/player/types';
import imgHolder from '../../../../assets/images/no-image.jpg';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface SongInfoProps {
	isPlaying: boolean;
	isActive: boolean;
	activeSong: SongProp;
}

export const SongInfo: React.FC<SongInfoProps> = ({ isPlaying, isActive, activeSong }) => {
	return (
		<div className={styles.ActiveSongBar}>
			<div className={clsx(styles.ActiveSongPoster, { [styles.active]: isPlaying && isActive })}>
				<img src={activeSong.images.coverart || imgHolder} alt="poster" />
			</div>
			<div className={styles.ActiveSongName}>
				<span className={styles.name}>
					{activeSong?.title ? activeSong.title : 'No Active Song'}
				</span>
				<span className={styles.artist}>
					{activeSong?.subtitle ? activeSong.subtitle : 'No Active Song'}
				</span>
			</div>
		</div>
	);
};
