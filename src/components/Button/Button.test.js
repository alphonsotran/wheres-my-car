import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

describe('Button component', () => {
  it('executes a callback when the button is clicked', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <Button label="Test Launch" type="button" onClick={mockCallback} />,
    );

    fireEvent.click(getByRole('button'));

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
