import Button from './Button';
import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';


describe('Button', () => {
  beforeEach(() => {
    render(<Button label='buttonlabel' />);
  });

  test('should display button', () => {
    expect(screen.getByText(/buttonlabel/iu)).toBeInTheDocument();
  });
});