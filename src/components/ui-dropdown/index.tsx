import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FilterProp } from '../../redux/slices/player/types';

interface DropdownProps {
	list: any[];
	selected: FilterProp;
	onSetSort: (obj: FilterProp) => void;
}

type PopupClick = MouseEvent & {
	path: Node[];
};

export const UIDropdown: React.FC<DropdownProps> = React.memo(({ list, selected, onSetSort }) => {
	const [visibleList, setVisibleList] = useState(false);
	const sortRef = useRef<HTMLDivElement>(null);

	const toggleSelectItem = (obj: any) => {
		onSetSort(obj);
		setVisibleList(false);
	};

	useEffect(() => {
		const clickOffSortPopup = (event: MouseEvent) => {
			const _event = event as PopupClick;
			const target = _event.target as HTMLInputElement;
			if (sortRef.current && !sortRef.current.contains(target)) {
				setVisibleList(false);
			}
		};

		document.body.addEventListener('click', clickOffSortPopup, true);

		return () => document.body.removeEventListener('click', clickOffSortPopup, true);
	}, []);

	return (
		<div ref={sortRef} className={styles.uiDropdown}>
			<div className={styles.sortLabel}>
				<span>
					<b className={clsx(styles.caret, { [styles.caretActive]: visibleList })}>
						<FontAwesomeIcon icon={faCaretDown} />
					</b>
					<span onClick={() => setVisibleList(!visibleList)} className={styles.selectSort}>
						{selected.title}
					</span>
				</span>
			</div>
			<ul className={clsx(styles.sortList, { [styles.visibleList]: visibleList })}>
				{list &&
					list.map((el, index) => {
						return (
							<li
								key={`${el.value}_${index}`}
								onClick={() => toggleSelectItem(el)}
								className={clsx(styles.sortListItem, {
									[styles.active]: selected.value === el.value,
								})}>
								{el.title}
							</li>
						);
					})}
			</ul>
		</div>
	);
});
