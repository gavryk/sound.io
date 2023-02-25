import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { settingsSelector } from '../../redux/slices/settings/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';

export const Sidebar: React.FC = () => {
	const { links, sidebarActive } = useSelector(settingsSelector);

	return (
		<div className={clsx(styles.sidebar, { [styles.active]: sidebarActive })}>
			<div className={styles.logoWrapper}>
				<Logo link="/" size="lg" />
			</div>
			{links && (
				<div className={styles.navigationLinks}>
					{links.map((item) => (
						<NavLink
							to={item.to}
							key={item.name}
							className={({ isActive }) => (isActive ? styles.active : '')}>
							<div className={styles.icon}>
								<FontAwesomeIcon icon={['fas', item.icon as IconName]} />
							</div>
							{item.name}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};
