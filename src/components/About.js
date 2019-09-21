import React from 'react';
import styled from 'styled-components';
import { fontSize, space } from 'styled-system';
import { useStaticQuery, graphql } from 'gatsby';

const Html = styled.div.attrs(() => ({
  mb: 3,
}))`
  ${fontSize}
  max-width: 480px;
  line-height: 1.5;
  h1 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

Html.defaultProps = {
  fontSize: 2,
};

const About = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "//about/description/" }) {
        html
      }
    }
  `);
  return (
    <>
      <Html dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
  );
};

export default About;
