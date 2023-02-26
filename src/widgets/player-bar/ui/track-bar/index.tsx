import React, { Dispatch, FormEvent, SetStateAction, useCallback } from 'react';
import styles from './styles.module.scss';

interface TrackBarProps {
	value: number;
	min: string;
	max: number;
	setSeekTime: Dispatch<SetStateAction<number>>;
}

export const TrackBar: React.FC<TrackBarProps> = ({ value, min, max, setSeekTime }) => {
	const getTime = (time: number) =>
		`${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

	const onInput = useCallback(
		(event: FormEvent<HTMLInputElement>) => {
			setSeekTime(Number(event.currentTarget.value));
		},
		[setSeekTime],
	);

	return (
		<div className={styles.trackBar}>
			<p>{value === 0 ? '0:00' : getTime(value)}</p>
			<input
				type="range"
				step="any"
				value={value}
				min={min}
				max={max}
				onInput={onInput}
				className={styles.bar}
			/>
			<p>{max === 0 ? '0:00' : getTime(max)}</p>
		</div>
	);
};
