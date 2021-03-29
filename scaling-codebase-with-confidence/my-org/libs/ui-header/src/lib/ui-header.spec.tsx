import React from 'react';
import { render } from '@testing-library/react';

import UiHeader from './ui-header';

describe('UiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
