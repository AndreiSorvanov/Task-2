import './App.css';
import { Content } from './components/Content';
import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from './store';
import { DataLoader } from './components/DataLoader';
import { ClientsList } from './components/ClientsList';
import { FilterBlockContainer } from './components/ClientsList/FilterBlockContainer';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <DataLoader>
        <Layout>
          <Content>
            <Title title={'Список клиентов'} />
            <FilterBlockContainer />
            <ClientsList />
          </Content>
        </Layout>
      </DataLoader>
    </Provider>
  );
}

export default App;
