import { EditButton } from './EditButton';
import styles from './Client.module.css';
import { IClient, IStatus } from '../../../API/types';
import { useSelector } from 'react-redux';
import { IState } from '../../../store';

export interface IClientProps extends IClient {}

export function Client({ id, firstName, lastName, patronymic, status }: IClientProps) {
  const statuses = useSelector<IState, Array<IStatus>>((state) => state.statuses);
  const statusName = statuses.find((elem) => elem.code === status)!.name;

  return (
    <li className={styles.clientContainer}>
      <article className={styles.client}>
        <div className={styles.clientInfo}>
          <div className={styles.infoValueContainer}>
            <span className={styles.label}>ID: </span>
            <span className={styles.value}>{`${id}`}</span>
          </div>
          <div className={styles.infoValueContainer}>
            <span className={styles.label}>ФИО: </span>
            <span className={styles.value}>{`${lastName} ${firstName} ${patronymic}`}</span>
          </div>
          <div className={styles.infoValueContainer}>
            <span className={styles.label}>Статус: </span>
            <span className={styles.value}>{statusName}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <EditButton id={id} status={status} />
        </div>
      </article>
    </li>
  );
}
