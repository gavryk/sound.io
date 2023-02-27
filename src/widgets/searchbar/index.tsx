import clsx from 'clsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UIInput } from '../../components';
import styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState<string>('');

	const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
		let text = e.currentTarget.value;
		setSearchText(text);
	};
	const handlerSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			navigate(`/search/${searchText}`);
			setSearchText('');
		}
	};

	return (
		<div className={clsx(styles.root)}>
			<UIInput
				type="search"
				name="q"
				placeholder="Search"
				value={searchText}
				onChange={inputHandler}
				onKeyDown={handlerSearchSubmit}
				spaceOff
			/>
		</div>
	);
};
