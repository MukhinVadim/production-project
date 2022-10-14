import { setupStore } from 'app/providers/store/storeConfig';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children?: ReactNode;
};

const store = setupStore();

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
