import React from 'react';
import {mountWithApp} from 'tests/utilities';

import {Cell} from '../Cell';

describe('<Cell />', () => {
  it('renders children', () => {
    const children = 'children';
    const cell = mountWithApp(<Cell>{children}</Cell>);

    expect(cell).toContainReactComponent('div', {children});
  });

  it('applies a grid-area style attribute', () => {
    const cell = mountWithApp(<Cell area="area1" />);

    expect(cell).toContainReactComponent('div', {
      style: {gridArea: 'area1'},
    });
  });

  it('applies classes when columns are passed in', () => {
    const cell = mountWithApp(
      <Cell columns={{xs: 2, sm: 4, md: 6, lg: 12, xl: 12}} />,
    );

    expect(cell).toContainReactComponent('div', {
      className:
        'Cell grid-2-column-xs grid-4-column-sm grid-6-column-md grid-12-column-lg grid-12-column-xl',
    });
  });

  it('applies inline styles when row is passed in', () => {
    const column = mountWithApp(<Cell row="1 / 3" />);

    expect(column).toContainReactComponent('div', {
      style: {gridRow: '1 / 3'},
    });
  });
});
