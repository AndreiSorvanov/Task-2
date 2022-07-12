import dbClients from '../db/list.json';
import { IClient } from './types';

export function getClients(): Array<IClient> {
  const clientsString = localStorage.getItem('clients');
  if (clientsString) {
    return JSON.parse(clientsString);
  }
  else {
    const clients: Array<IClient> = Object.entries(dbClients.list).map(([clientId, client]) => ({ id: clientId, ...client }));
    localStorage.setItem('clients', JSON.stringify(clients));
    return clients;
  }
}

