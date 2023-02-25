import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PlayBtnProps {
	isPlaying: boolean;
	color?: string;
	onClick: () => void;
}

export const PlayButton: React.FC<PlayBtnProps> = ({ isPlaying, color = '#fff', onClick }) => {
	return (
		<FontAwesomeIcon
			icon={['fas', isPlaying ? 'pause-circle' : 'play-circle']}
			color={color}
			size="3x"
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		/>
	);
};
