import React from 'react';
import { RootState } from '../modules';
import { useSelector, useDispatch } from 'react-redux';
import { plusCounter, minusCounter, resetCounter } from '../modules/counter';

export const useCounter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onClickPlus = () => dispatch(plusCounter());
  const onClickMinus = () => dispatch(minusCounter());
  const onClickReset = () => dispatch(resetCounter());

  return { counter, onClickMinus, onClickPlus, onClickReset };
};
