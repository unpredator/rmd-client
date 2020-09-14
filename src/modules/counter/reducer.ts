import { CounterState, CounterAction } from './types';
import { RESET_COUNTER, PLUS_COUNTER, MINUS_COUNTER } from './actions';

const initialState: CounterState = 0;

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case RESET_COUNTER:
      return 0;
    case PLUS_COUNTER:
      return state + 1;
    case MINUS_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
