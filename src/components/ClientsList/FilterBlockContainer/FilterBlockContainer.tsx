import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, updateFilterAction } from '../../../store';
import { FilterBlock } from './FilterBlock/FilterBlock';

export function FilterBlockContainer() {
  const dispatch = useDispatch();
  const filter = useSelector<IState, string>((state) => state.filter);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    dispatch(updateFilterAction(event.currentTarget.value));
  }

  return (
    <FilterBlock filter={filter} onFilterInput={handleInput} />
  );
}
