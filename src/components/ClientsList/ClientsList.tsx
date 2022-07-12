import styles from './ClientsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState, updateCurrentPageAction } from '../../store';
import { PaginationContainer } from './PaginationContainer';
import { IClient } from '../../API/types';
import { Client } from './Client';

export function ClientsList() {
  const dispatch = useDispatch();
  const pageClientsCount = useSelector<IState, number>((state) => state.pageClientsCount);
  const clients = useSelector<IState, Array<IClient>>((state) => state.clients);
  const currentPage = useSelector<IState, number>((state) => state.currentPage);
  const filter = useSelector<IState, string>((state) => state.filter);

  const filteredClients = filter
    ? clients.filter((client) => {
        return [client.firstName, client.lastName, client.patronymic]
                  .map((elem) => elem.toLowerCase())
                  .some((elem) => elem.includes(filter));
      })
    : clients;

  const firstClientIndex = (currentPage - 1) * pageClientsCount;
  const lastClientIndex = currentPage * pageClientsCount;
  const displayedClients = filteredClients.slice(firstClientIndex, lastClientIndex);

  const totalPagesCount = Math.ceil(filteredClients.length / pageClientsCount);
  if (currentPage > totalPagesCount && totalPagesCount > 0) {
    dispatch(updateCurrentPageAction(totalPagesCount));
  }

  return (
    <>
      {
        totalPagesCount !== 0
        ? (<>
            <ul className={styles.clientsList}>
              {displayedClients.map((client) => <Client key={client.id} {...client} />)}
            </ul>
            <PaginationContainer current={currentPage} total={totalPagesCount} />
          </>)
        : <div className={styles.empty}>Нет клиентов</div>
      }
    </>
  );
}
