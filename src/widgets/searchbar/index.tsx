import React from 'react';
import { UIInput } from '../../components';
import styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.root}>
      <UIInput type="search" placeholder="Search" spaceOff />
    </div>
  );
};
