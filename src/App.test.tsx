import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the list of itineraries', () => {
  render(<App />);
  const linkElement = screen.getAllByTestId(/itinerary-card/i);
  expect(linkElement.length).toEqual(2);
});
 