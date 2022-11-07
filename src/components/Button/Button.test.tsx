import { Button } from './Button';
import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-unassigned-import
import '@testing-library/jest-dom';

describe('Button', () => {
  beforeEach(async () => {
    render(<Button label='buttonlabel' />);
  });

  test('should display button.', async () => {
    expect(screen.getByText(/buttonlabel/iu)).toBeInTheDocument();
  });
});
