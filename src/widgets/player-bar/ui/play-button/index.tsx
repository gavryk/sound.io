import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

interface PlayBtnProps {
	isPlaying: boolean;
	color?: string;
}

export const PlayButton: React.FC<PlayBtnProps> = ({ isPlaying, color = '#fff' }) => {
	library.add(fas);
	return (
		<FontAwesomeIcon
			icon={['fas', isPlaying ? 'pause-circle' : 'play-circle']}
			color={color}
			size="3x"
		/>
	);
};