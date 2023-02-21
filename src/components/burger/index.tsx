import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/slices/settings/selector';
import { setSidebarStatus } from '../../redux/slices/settings/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

export const Burger: React.FC = () => {
	const dispatch = useAppDispatch();
	const { sidebarActive } = useSelector(settingsSelector);

	const burgerHandler = () => {
		dispatch(setSidebarStatus(!sidebarActive));
	};

	return (
		<div className={clsx(styles.root, { [styles.active]: sidebarActive })} onClick={burgerHandler}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};
