import React from 'react';
import * as S from './CounterStyle';
import { useCounter } from '../../hooks/useCounter';

export const Counter: React.FC = () => {
  const { counter, onClickMinus, onClickPlus, onClickReset } = useCounter();

  return (
    <S.Container>
      <button onClick={onClickMinus}>-</button>
      <span>{counter}</span>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickReset}>reset</button>
    </S.Container>
  );
};

export default Counter;
