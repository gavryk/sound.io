import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface PlayBtnProps {
	isPlaying: boolean;
	color?: string;
	onClick: () => void;
	size?: SizeProp;
}

export const PlayButton: React.FC<PlayBtnProps> = ({
	isPlaying,
	color = '#fff',
	onClick,
	size = '3x',
}) => {
	return (
		<FontAwesomeIcon
			icon={['fas', isPlaying ? 'pause-circle' : 'play-circle']}
			color={color}
			size={size}
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		/>
	);
};
