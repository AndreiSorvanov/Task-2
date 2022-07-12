import dbStatuses from '../db/status.json';
import { IStatus } from './types';

export function getStatuses(): Array<IStatus> {
  const statuses: Array<IStatus> = dbStatuses.status.map((status) => ({ code: status.code, name: status.statusText }));
  return statuses;
}

