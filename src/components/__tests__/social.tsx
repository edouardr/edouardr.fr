import * as React from 'react';
import { render } from '@testing-library/react';
import { Twitter, GitHub, LinkedIn, RSS } from '../social';
import config from '../../../config/website';

describe(`Social`, () => {
  it(`renders LinkedIn icon`, () => {
    const expectedTitle = `Visit my LinkedIn`;
    const { getByLabelText } = render(<LinkedIn />);

    const element = getByLabelText(expectedTitle);
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('href')).toEqual(config.linkedin);
  });

  it(`renders Twitter icon`, () => {
    const expectedTitle = `Visit my Twitter`;
    const { getByLabelText } = render(<Twitter />);

    const element = getByLabelText(expectedTitle);
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('href')).toEqual(config.twitter);
  });

  it(`renders Github icon`, () => {
    const expectedTitle = `Visit my GitHub`;
    const { getByLabelText } = render(<GitHub />);

    const element = getByLabelText(expectedTitle);
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('href')).toEqual(config.github);
  });

  it(`renders RSS icon`, () => {
    const expectedTitle = `RSS Feed`;
    const { getByLabelText } = render(<RSS />);

    const element = getByLabelText(expectedTitle);
    expect(element).toBeInTheDocument();
    expect(element.getAttribute('href')).toEqual(config.rss);
  });
});
