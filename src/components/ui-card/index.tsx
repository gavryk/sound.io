import React from 'react';
import { SongProp } from '../../redux/slices/player/types';
import { PlayButton } from '../ui-play-button';
import styles from './styles.module.scss';

export const UICard: React.FC<SongProp> = ({ title, images, subtitle }) => {
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				<div className={styles.controlBtn}>
					<PlayButton isPlaying={false} />
				</div>
				<img src={images?.coverart || images?.coverarthq} alt="song poster" />
			</div>
			<div className={styles.title}>
				<p className={styles.songName}>
					{title.length > 35 ? `${title.substring(0, 35)}...` : title}
				</p>
				<p className={styles.artistName}>
					{subtitle.length > 30 ? `${subtitle.substring(0, 30)}...` : subtitle}
				</p>
			</div>
		</div>
	);
};
