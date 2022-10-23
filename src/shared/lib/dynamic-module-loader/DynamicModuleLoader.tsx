import { Reducer } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/storeConfig';
import { ReactElement, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

type DynamicModuleLoaderProps = {
  children: ReactElement;
  reducers: { [name in keyof RootState]?: Reducer };
};

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (
  props
) => {
  const store = useStore();
  const { children, reducers } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      dispatch({ type: `@INIT ${name} reducer` });
      store.reducerManager.add(name as keyof RootState, reducer);
    });

    return () => {
      Object.entries(reducers).forEach(([name]) => {
        store.reducerManager.remove(name as keyof RootState);
        dispatch({ type: `@DESTROY  ${name} reducer` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
