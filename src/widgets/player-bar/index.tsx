import clsx from 'clsx';
import React, { FormEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { playerSelector } from '../../redux/slices/player/selector';
import { nextSong, playPause, prevSong } from '../../redux/slices/player/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';
import { PlayButton, Player, SongInfo, TrackBar, VolumeBar } from './ui';

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

	const handleNextSong = useCallback(() => {
		if (!shuffle) {
			dispatch(nextSong((currentIndex + 1) % songs.length));
		} else {
			dispatch(nextSong(Math.floor(Math.random() * songs.length)));
		}
	}, [currentIndex, dispatch, shuffle]);

	const handlePrevSong = useCallback(() => {
		if (currentIndex === 0) {
			dispatch(prevSong(songs.length - 1));
		} else if (shuffle) {
			dispatch(prevSong(Math.floor(Math.random() * songs.length)));
		} else {
			dispatch(prevSong(currentIndex - 1));
		}
	}, [currentIndex, dispatch, shuffle]);

	const handleTimeUpdate = useCallback(
		(event: FormEvent<HTMLAudioElement>) => setAppTime(event.currentTarget.currentTime),
		[],
	);
	const handleLoadedData = useCallback(
		(event: FormEvent<HTMLAudioElement>) => setDuration(event.currentTarget.duration),
		[],
	);

	return (
		<div className={clsx(styles.musicPlayer, { [styles.active]: isActive })}>
			<SongInfo isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
			<div className={styles.middleBar}>
				<PlayButton isPlaying={isPlaying} onClick={handlePlayPause} />
				<TrackBar value={appTime} min="0" max={duration} setSeekTime={setSeekTime} />
				<Player
					activeSong={activeSong}
					volume={volume}
					isPlaying={isPlaying}
					seekTime={seekTime}
					repeat={repeat}
					onEnded={handleNextSong}
					onTimeUpdate={handleTimeUpdate}
					onLoadedData={handleLoadedData}
				/>
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
