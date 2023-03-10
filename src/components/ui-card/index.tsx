import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { playerSelector } from '../../redux/slices/player/selector';
import { SongProp } from '../../redux/slices/player/types';
import { PlayButton } from '../../widgets/player-bar/ui';
import imgHolder from '../../assets/images/no-image.jpg';
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
				<img src={images?.coverart || imgHolder} alt="song poster" />
			</div>
			<div className={styles.title}>
				<p className={styles.songName}>{title}</p>
				<p className={styles.artistName}>{subtitle}</p>
			</div>
		</div>
	);
};
