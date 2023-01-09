import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { settingsSelector } from '../../redux/slices/settings/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { IconName } from '@fortawesome/free-regular-svg-icons';

export const Sidebar: React.FC = () => {
  const { links } = useSelector(settingsSelector);
  library.add(fas);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Logo link="/" size="lg" />
      </div>
      {links && (
        <div className={styles.navigationLinks}>
          {links.map((item) => (
            <NavLink to={item.to} key={item.name}>
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