import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentPageAction } from '../../../store';
import { Pagination } from './Pagination';

interface IPaginationContainerProps {
  current: number;
  total: number;
}

export function PaginationContainer({ current, total }: IPaginationContainerProps) {
  const dispatch = useDispatch();

  const handlePrevClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(updateCurrentPageAction(current - 1));
  }

  const handleNextClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(updateCurrentPageAction(current + 1));
  }

  return (
    <Pagination current={current} total={total} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
  );
}
