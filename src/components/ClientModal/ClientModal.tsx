import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './ClientModal.module.css';
import { MouseEvent } from 'react';
import { Modal } from '../Modal';
import { IClient, IStatus } from '../../API/types';
import { useSelector } from 'react-redux';
import { IState } from '../../store';

interface IClientModalProps {
  id: IClient['id'];
  initStatus: IClient['status'];
  onClose: () => void;
  onEditClient: (id: IClient['id'], status: IClient['status']) => void;
}

export function ClientModal({ id, initStatus, onClose, onEditClient }: IClientModalProps) {
  const statuses = useSelector<IState, Array<IStatus>>((state) => state.statuses);

  const [status, setStatus] = useState<IClient['status']>(initStatus);

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(Number(event.currentTarget.value));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEditClient(id, status);
    onClose();
  }

  const handleCancelClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClose();
  }

  return (
    <Modal>
      <h2 className={styles.clientModalHeading}>Редактирование клиента</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.group}>
          <legend>Сортировка:</legend>
          <div>
            <select className={styles.statusSelect} value={status} onChange={handleStatusChange}>
              {statuses.map((status) => <option key={status.code} value={status.code}>{status.name}</option>)}
            </select>
          </div>
        </fieldset>

        <div className={styles.btnGroup}>
          <button type='submit' className={styles.saveBtn}>Сохранить</button>
          <button type='button' className={styles.cancelBtn} onClick={handleCancelClick}>Отмена</button>
        </div>
      </form>
    </Modal>
  );
}
