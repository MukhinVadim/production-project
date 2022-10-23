import {
  Action,
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

export function createReducerManager<S, A extends Action = AnyAction>(
  initialReducers: ReducersMapObject<S, A>
) {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<keyof CombinedState<S>> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: CombinedState<S>, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
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
