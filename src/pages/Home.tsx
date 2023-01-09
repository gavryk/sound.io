import React from 'react';
import { useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import { UIDropdown, UITypography } from '../components';
import { playerSelector } from '../redux/slices/player/selector';
import { setFilter } from '../redux/slices/player/slice';
import { useAppDispatch } from '../redux/store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { genresFilter } = useSelector(playerSelector);

  const setFilterHandler = (genres: string) => {
    dispatch(setFilter(genres));
  };

  return (
    <div>
      <UITypography variant="h1" fontWeight="bold">
        Discover {genresFilter.title}
      </UITypography>
      <UIDropdown list={genres} selected={genresFilter} onSetSort={setFilterHandler} />
    </div>
  );
};
