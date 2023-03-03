import React from 'react';
import { SongProp } from '../../redux/slices/player/types';
import imgHolder from '../../assets/images/no-image.jpg';
import styles from './styles.module.scss';

export const ArtistCard: React.FC<SongProp> = ({ subtitle, images, artists }) => {
	const firstLet = artists && artists[0].alias.charAt(0).toUpperCase();
	const remainingLet = artists && artists[0].alias.slice(1);
	return (
		<div className={styles.artistCard}>
			<div className={styles.artistPhoto}>
				<img src={images?.background || imgHolder} alt="artist" />
			</div>
			<div className={styles.artistName}>{artists ? `${firstLet}${remainingLet}` : subtitle}</div>
		</div>
	);
};
