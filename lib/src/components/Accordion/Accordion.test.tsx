import Accordion from './Accordion';
import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Accordion', () => {
  beforeEach(() => {
    render(<Accordion 
      title='accordion_title' 
      content='accordion_content' 
      isOpen={ false } 
      />);
  });

  test('should display accordion title', () => {
    expect(screen.getByText(/accordion_title/iu)).toBeInTheDocument();
  });

  test('should not display accordion content', () => {
    expect(screen.queryByText(/accordion_content/iu)).toBeNull();
  });

  test('should open accordion', async () => {
    const accordion = screen.getByText(/accordion_title/iu);
    fireEvent.click(accordion);
    expect(await screen.findByText(/accordion_content/iu));
  });
});