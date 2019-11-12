import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Menu from '../components/menu';
import '../mystyles.scss';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const Div = styled.div`
    position: relative;
    top: 170px;
    left: 10%;
    width: 50%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    & p {
      text-align: left;
      font-size: 24px;
      font-weight: 200;
    }
    & span {
      color: #366bd3;
    }
  `;
  return (
    <Div className="columns is-desktop">
      <div className="column is-5">
        <Menu />
      </div>
      <div className="column is-12">
        <Link to="/blog">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
