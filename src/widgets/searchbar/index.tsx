import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { UIInput } from '../../components';
import { settingsSelector } from '../../redux/slices/settings/selector';
import styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
	return (
		<div className={clsx(styles.root)}>
			<UIInput type="search" placeholder="Search" spaceOff />
		</div>
	);
};
