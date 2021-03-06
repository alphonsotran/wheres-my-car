import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Where's My Car/i)).toBeInTheDocument();
  });
});
