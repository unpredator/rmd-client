import { plusCounter, minusCounter, resetCounter } from './actions';

export type Counter = number;

export type CounterAction =
  | ReturnType<typeof plusCounter>
  | ReturnType<typeof minusCounter>
  | ReturnType<typeof resetCounter>;

export type CounterState = Counter;
