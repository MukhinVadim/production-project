import {
  Action,
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

type ReducerManager<S, A extends Action = AnyAction> = {
  getReducerMap: () => ReducersMapObject<S, A>;
  reduce: Reducer<CombinedState<S>, A>;
  add: (key: keyof S, reducer: Reducer<S[keyof S]>) => void;
  remove: (key: keyof S) => void;
};

export function createReducerManager<S, A extends Action = AnyAction>(
  initialReducers: ReducersMapObject<S, A>
): ReducerManager<S, A> {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<keyof CombinedState<S>> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state } as CombinedState<S>;
        keysToRemove.forEach((key) => {
          delete state?.[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: keyof S, reducer: Reducer<S[keyof S]>) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: keyof S) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
