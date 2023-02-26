import React from 'react';
import { useSelector } from 'react-redux';
import { genres } from '../../assets/constants';
import { UIDropdown, UITypography } from '../../components';
import { fetchSongsByGenre } from '../../redux/slices/player/asyncSongs';
import { playerSelector } from '../../redux/slices/player/selector';
import { setFilter } from '../../redux/slices/player/slice';
import { FilterProp } from '../../redux/slices/player/types';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

type TopBlockProp = {
	title: string;
	showFilter?: boolean;
};

export const TopBlock: React.FC<TopBlockProp> = ({ title, showFilter = false }) => {
	const dispatch = useAppDispatch();
	const { genresFilter } = useSelector(playerSelector);

	const setFilterHandler = (genres: FilterProp) => {
		dispatch(setFilter(genres));
		dispatch(fetchSongsByGenre(genres.value));
	};

	return (
		<div className={styles.topBlock}>
			<UITypography variant="h2" fontWeight="bold" bottomSpace="none">
				{title} {showFilter && genresFilter.title !== 'All Songs' ? genresFilter.title : ''}
			</UITypography>
			{showFilter && (
				<UIDropdown list={genres} selected={genresFilter} onSetSort={setFilterHandler} />
			)}
		</div>
	);
};
