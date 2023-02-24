import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { playerSelector } from '../../redux/slices/player/selector';
import { SongProp } from '../../redux/slices/player/types';
import { PlayButton } from '../../widgets/player-bar/ui';
import styles from './styles.module.scss';

type CardProp = SongProp & {
	clickHandler: () => void;
};

export const UICard: React.FC<CardProp> = ({ title, images, subtitle, clickHandler }) => {
	const { activeSong, isPlaying } = useSelector(playerSelector);

	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				<div
					className={clsx(styles.controlBtn, {
						[styles.playing]: activeSong.title === title && isPlaying,
					})}>
					<PlayButton isPlaying={activeSong.title === title && isPlaying} onClick={clickHandler} />
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
