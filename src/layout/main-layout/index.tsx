import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className={clsx(styles.mainLayout)}>
      <Sidebar />
      <div className={clsx(styles.layoutContent)}>
        <Outlet />
      </div>
    </div>
  );
};
