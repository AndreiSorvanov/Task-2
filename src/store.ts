import { Reducer } from '@reduxjs/toolkit';
import { ActionCreator, AnyAction } from 'redux';
import { editClient } from './API/editClient';
import { getClients } from './API/getClients';
import { getStatuses } from './API/getStatuses';
import { IClient, IStatus } from './API/types';

const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
const FETCH_STATUSES = 'FETCH_STATUSES';
const FETCH_CLIENTS = 'FETCH_CLIENTS';
const UPDATE_CLIENT = 'UPDATE_CLIENT';
const UPDATE_FILTER = 'UPDATE_FILTER';

export interface IState {
  currentPage: number;
  pageClientsCount: number;
  statuses: Array<IStatus>;
  clients: Array<IClient>;
  filter: string;
}

const currentPage = Number(localStorage.getItem('currentPage'));
const filter = localStorage.getItem('filter');

const initialState: IState = {
  currentPage: currentPage || 1,
  pageClientsCount: 3,
  statuses: [],
  clients: [],
  filter: filter || '',
}

export const updateCurrentPageAction: ActionCreator<AnyAction> = (pageNumber: number) => {
  return { type: UPDATE_CURRENT_PAGE, pageNumber };
}

export const fetchStatusesAction: ActionCreator<AnyAction> = () => {
  return { type: FETCH_STATUSES };
}

export const fetchClientsAction: ActionCreator<AnyAction> = () => {
  return { type: FETCH_CLIENTS };
}

export const updateClientAction: ActionCreator<AnyAction> = (id: string, status: number) => {
  return { type: UPDATE_CLIENT, id, status };
}

export const updateFilterAction: ActionCreator<AnyAction> = (filter: string) => {
  return { type: UPDATE_FILTER, filter };
}

export const rootReducer: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE: {
      localStorage.setItem('currentPage', action.pageNumber);

      return {
        ...state,
        currentPage: action.pageNumber,
      }
    }
    case FETCH_STATUSES: {
      const statuses = getStatuses();
      return {
        ...state,
        statuses,
      }
    }
    case FETCH_CLIENTS: {
      const clients = getClients();
      return {
        ...state,
        clients,
      }
    }
    case UPDATE_CLIENT: {
      const clients = editClient(action.id, action.status);
      return {
        ...state,
        clients,
      }
    }
    case UPDATE_FILTER:
      const lowerCasedFilter = action.filter.toLowerCase()
      localStorage.setItem('filter', lowerCasedFilter);

      return {
        ...state,
        filter: lowerCasedFilter,
      }
    default:
      return state;
  }
}
