import clsx from 'clsx';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <div className={clsx(styles.mainLayout)}>
      <Outlet />
    </div>
  );
};
