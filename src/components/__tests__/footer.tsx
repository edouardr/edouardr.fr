import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from '../footer';

describe(`Footer`, () => {
  it(`renders all social links`, () => {
    const expectedTitle = /^Visit my/;
    const { getAllByLabelText } = render(<Footer />);

    const links = getAllByLabelText(expectedTitle);

    expect(links.length).toEqual(3);
  });
});
