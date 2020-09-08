import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import IssuesList from './IssuesList';

test('renders "no items" when the issue list is empty', () => {
  render(<IssuesList issues={[]} />)
  expect(screen.getByText("You haven't posted any community concerns yet!")).toBeInTheDocument()
})

test('renders the issues in the list', () => {
  render(<IssuesList key={[1]} issues={[
    {
      title: 'Dummy Title',
      description: 'This is a dummy Description',
    }
  ]} />)
  expect(screen.getByText(/dummy title/i)).toBeInTheDocument()
})