import React from 'react';
import styles from './styles.module.scss';

interface CardProps {
	title: string;
}

export const UICard: React.FC<CardProps> = ({ title }) => {
	return (
		<div className={styles.card}>
			<h2>{title}</h2>
		</div>
	);
};
