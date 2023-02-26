import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playerSelector } from '../../redux/slices/player/selector';
import { playPause } from '../../redux/slices/player/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';
import { PlayButton, SongInfo, VolumeBar } from './ui';

export const PlayerBar: React.FC = () => {
	const dispatch = useAppDispatch();
	const { activeSong, currentIndex, songs, isActive, isPlaying } = useSelector(playerSelector);
	const [duration, setDuration] = useState(0);
	const [seekTime, setSeekTime] = useState(0);
	const [appTime, setAppTime] = useState(0);
	const [volume, setVolume] = useState(0.3);
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);

	const handlePlayPause = () => {
		if (!isActive) return;

		dispatch(playPause(!isPlaying));
	};

	return (
		<div className={clsx(styles.musicPlayer, { [styles.active]: isActive })}>
			<SongInfo isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
			<div className={styles.middleBar}>
				<PlayButton isPlaying={isPlaying} onClick={handlePlayPause} />
			</div>
			<VolumeBar
				value={volume}
				min={0}
				max={1}
				onChange={(event) => setVolume(Number(event.target.value))}
				setVolume={(val: number) => setVolume(val)}
			/>
		</div>
	);
};
