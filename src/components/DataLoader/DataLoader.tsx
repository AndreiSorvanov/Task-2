import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStatusesAction, fetchClientsAction } from '../../store';

interface IDataLoaderProps {
  children?: React.ReactNode;
}

export function DataLoader({ children }: IDataLoaderProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatusesAction());
    dispatch(fetchClientsAction());
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  );
}
