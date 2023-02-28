import React from 'react';
import styles from './styles.module.scss';

export const Loader: React.FC = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.bars}>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</div>
		</div>
	);
};
