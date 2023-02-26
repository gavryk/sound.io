import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Burger } from '../../components';
import { settingsSelector } from '../../redux/slices/settings/selector';
import { PlayerBar, SearchBar, Sidebar } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
	const { sidebarActive } = useSelector(settingsSelector);

	return (
		<div className={clsx(styles.mainLayout, { [styles.sidebarOpen]: sidebarActive })}>
			<Sidebar />
			<div className={clsx(styles.layoutContent)}>
				<div className={clsx(styles.topLayout)}>
					<SearchBar />
					<Burger />
				</div>
				<div className={clsx(styles.layoutInner)}>
					<Outlet />
				</div>
			</div>
			<PlayerBar />
		</div>
	);
};
