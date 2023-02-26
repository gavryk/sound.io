import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction } from 'react';
import { SongProp } from '../../../../redux/slices/player/types';
import { PlayButton } from '../play-button';
import styles from './styles.module.scss';

interface ControlsBarProps {
	isPlaying: boolean;
	repeat: boolean;
	setRepeat: Dispatch<SetStateAction<boolean>>;
	shuffle: boolean;
	setShuffle: Dispatch<SetStateAction<boolean>>;
	songs: SongProp[];
	handlePlayPause: () => void;
	handlePrevSong: () => void;
	handleNextSong: () => void;
}

export const Controls: React.FC<ControlsBarProps> = ({
	isPlaying,
	handlePlayPause,
	repeat,
	setRepeat,
	shuffle,
	setShuffle,
	songs,
	handleNextSong,
	handlePrevSong,
}) => {
	return (
		<div className={styles.controlsBar}>
			<FontAwesomeIcon
				icon={['fas', 'repeat']}
				size="lg"
				color={repeat ? '#5db1d8' : '#fff'}
				onClick={() => setRepeat(!repeat)}
				style={{ cursor: 'pointer' }}
				className={styles.mobHide}
			/>
			{songs?.length && (
				<FontAwesomeIcon
					icon={['fas', 'backward-step']}
					size="2xl"
					color="#fff"
					onClick={handlePrevSong}
					style={{ cursor: 'pointer' }}
				/>
			)}
			<PlayButton size="2xl" isPlaying={isPlaying} onClick={handlePlayPause} />
			{songs?.length && (
				<FontAwesomeIcon
					icon={['fas', 'forward-step']}
					size="2xl"
					color="#fff"
					onClick={handleNextSong}
					style={{ cursor: 'pointer' }}
				/>
			)}
			<FontAwesomeIcon
				icon={['fas', 'shuffle']}
				size="lg"
				color={shuffle ? '#5db1d8' : '#fff'}
				onClick={() => setShuffle(!shuffle)}
				style={{ cursor: 'pointer' }}
				className={styles.mobHide}
			/>
		</div>
	);
};
