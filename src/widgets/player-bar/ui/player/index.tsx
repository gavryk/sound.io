import React, { ReactEventHandler, useEffect, useRef } from 'react';
import { SongProp } from '../../../../redux/slices/player/types';

interface PlayerProps {
	activeSong?: SongProp;
	isPlaying: boolean;
	volume: number;
	seekTime: number;
	onEnded: ReactEventHandler<HTMLAudioElement>;
	onTimeUpdate: ReactEventHandler<HTMLAudioElement>;
	onLoadedData: ReactEventHandler<HTMLAudioElement>;
	repeat: boolean;
}

export const Player: React.FC<PlayerProps> = ({
	activeSong,
	isPlaying,
	volume,
	seekTime,
	onEnded,
	onTimeUpdate,
	onLoadedData,
	repeat,
}) => {
	const ref = useRef<HTMLAudioElement>(null);
	if (ref.current) {
		if (isPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	}

	useEffect(() => {
		if (ref.current) {
			ref.current.volume = volume;
		}
	}, [volume]);

	useEffect(() => {
		if (ref.current) {
			ref.current.currentTime = seekTime;
		}
	}, [seekTime]);

	return (
		<audio
			src={activeSong?.hub?.actions[1]?.uri}
			ref={ref}
			loop={repeat}
			onEnded={onEnded}
			onTimeUpdate={onTimeUpdate}
			onLoadedData={onLoadedData}
		/>
	);
};
