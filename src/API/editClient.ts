import { IClient } from './types';

export function editClient(id: string, status: number): Array<IClient> {
  const clients: Array<IClient> = JSON.parse(localStorage.getItem('clients')!);
  const index = clients.findIndex((client) => client.id === id);
  clients[index] = { ...clients[index], status };
  localStorage.setItem('clients', JSON.stringify(clients));
  return clients;
}

