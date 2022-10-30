import { setupStore } from 'app/providers/store/storeConfig';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type StoreProviderProps = {
  children?: ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const store = setupStore({ navigate });

  return <Provider store={store}>{children}</Provider>;
};
