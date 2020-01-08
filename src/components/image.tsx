import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ed-working.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="flex items-center justify-center bg-white border rounded-full overflow-hidden">
      <Img
        className="w-40 h-40 object-cover object-top"
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="edouard working in the boot of a car"
      />
    </div>
  );
};

export default Image;
