import styles from './FilterBlock.module.css';
import { FormEvent } from 'react';

interface IFilterBlockProps {
  filter: string;
  onFilterInput: (event: FormEvent<HTMLInputElement>) => void;
}

export function FilterBlock({ filter, onFilterInput }: IFilterBlockProps) {
  return (
    <div className={styles.filterBlock}>
      <label className={styles.filterLabel}>Фильтрация:
        <input className={styles.filterInput} type="search" value={filter} onInput={onFilterInput} />
      </label>
    </div>
  );
}
