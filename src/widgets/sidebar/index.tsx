import React from 'react';
import { Logo } from '../../components/logo';
import styles from './styles.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Logo link="/" size="lg" />
      </div>
    </div>
  );
};
