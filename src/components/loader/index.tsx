import React from 'react';
import styles from './styles.module.scss';

export const Loader: React.FC = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.bars}>
				{[...new Array(8)].map((_, index) => (
					<div className={styles.bar}></div>
				))}
			</div>
		</div>
	);
};
