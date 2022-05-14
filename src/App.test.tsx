import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

test('renders the list of itineraries', () => {
  render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  );
  const linkElement = screen.getAllByTestId(/itinerary-card/i);
  expect(linkElement.length).toEqual(2);
});
 