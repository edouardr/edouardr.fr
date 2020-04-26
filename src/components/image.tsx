import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ed-profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="flex items-center justify-center bg-white border rounded-full overflow-hidden">
      <Img
        className="w-32 h-32 xl:w-48 xl:h-48 object-cover object-bottom"
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="edouard working in the boot of a car"
      />
    </div>
  );
};

export default Image;
