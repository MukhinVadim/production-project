import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import 'react-redux';
import { RootState } from 'app/providers/store/storeConfig';

declare module '@reduxjs/toolkit' {
  interface EnhancedStore {
    reducerManager?: {
      getReducerMap: () => ReducersMapObject;
      reduce: (state: RootState, action: AnyAction) => CombinedState<RootState>;
      add: (key: keyof RootState, reducer: Reducer) => void;
      remove: (key: keyof RootState) => void;
    };
  }
}

declare module 'redux' {
  interface Store {
    reducerManager?: {
      getReducerMap: () => ReducersMapObject;
      reduce: (
        state: RootState,
        action: AnyAction
        // eslint-disable-next-line no-undef
      ) => CombinedState<RootState>;
      add: (key: keyof RootState, reducer: Reducer) => void;
      remove: (key: keyof RootState) => void;
    };
  }
}
