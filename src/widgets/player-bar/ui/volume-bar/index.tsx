import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

interface VolumeBarProps {
	value: number;
	min: number;
	max: number;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	setVolume: (val: number) => void;
}

export const VolumeBar: React.FC<VolumeBarProps> = ({ value, min, max, onChange, setVolume }) => {
	return (
		<div className={styles.vulumeBar}>
			{value <= 1 && value > 0.5 && (
				<FontAwesomeIcon
					icon={['fas', 'volume-high']}
					color="#fff"
					size="lg"
					onClick={() => setVolume(0)}
					style={{ cursor: 'pointer' }}
				/>
			)}
			{value <= 0.5 && value > 0 && (
				<FontAwesomeIcon
					icon={['fas', 'volume-low']}
					color="#fff"
					size="lg"
					onClick={() => setVolume(0)}
					style={{ cursor: 'pointer' }}
				/>
			)}
			{value === 0 && (
				<FontAwesomeIcon
					icon={['fas', 'volume-xmark']}
					color="#fff"
					size="lg"
					onClick={() => setVolume(1)}
					style={{ cursor: 'pointer' }}
				/>
			)}
			<input
				type="range"
				step="any"
				value={value}
				min={min}
				max={max}
				onChange={onChange}
				className={styles.bar}
			/>
		</div>
	);
};
