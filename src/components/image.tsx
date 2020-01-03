import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ed-working.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="w-64 bg-white border rounded-lg overflow-hidden">
      <Img
        className="h-64 w-64 object-cover object-top"
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="edouard working in the boot of a car"
      />
    </div>
  );
};

export default Image;
