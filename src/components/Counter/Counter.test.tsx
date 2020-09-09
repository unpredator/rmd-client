import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Counter } from './';

describe('Counter comopoent', () => {
  // it('matches snapshot', () => {
  //   const { container } = render(<Counter />);
  //   expect(container).toMatchSnapshot();
  // });
  // it('shows the elemnts correctly', () => {
  //   const utils = render(<Counter />);
  //   utils.getByText('+');
  //   utils.getByText('-');
  //   utils.getByText('reset');
  //   utils.getByText('0');
  // });
  // it('+ button add count number', () => {
  //   const utils = render(<Counter />);
  //   const plusButton = utils.getByText('+');
  //   const counter = utils.getByText('0');
  //   fireEvent.click(plusButton);
  //   console.log(counter.textContent);
  // });
});
