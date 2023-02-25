import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Burger } from '../../components';
import { PlayerBar, SearchBar, Sidebar } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
	return (
		<div className={clsx(styles.mainLayout)}>
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
