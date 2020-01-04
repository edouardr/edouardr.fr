import * as React from 'react';
import { render } from '@testing-library/react';
import { Twitter, GitHub, LinkedIn } from '../social';

describe(`Social`, () => {
  it(`renders LinkedIn icon`, () => {
    const expectedTitle = `Visit my LinkedIn`;
    const { getByLabelText } = render(<LinkedIn />);

    const title = getByLabelText(expectedTitle);

    expect(title).toBeInTheDocument();
  });

  it(`renders Twitter icon`, () => {
    const expectedTitle = `Visit my Twitter`;
    const { getByLabelText } = render(<Twitter />);

    const title = getByLabelText(expectedTitle);

    expect(title).toBeInTheDocument();
  });

  it(`renders Github icon`, () => {
    const expectedTitle = `Visit my GitHub`;
    const { getByLabelText } = render(<GitHub />);

    const title = getByLabelText(expectedTitle);

    expect(title).toBeInTheDocument();
  });
});
