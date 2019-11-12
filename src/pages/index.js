import React from 'react';
import { Link } from 'gatsby';
import '../mystyles.scss';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';

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

const Test = styled.div``;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <Div className="columns is-desktop">
        <Test className="column is-5">
          <Menu />
        </Test>
        <div className="column is-12">
          <p>
            Hello, I'm <span>Wesley Bonneville</span> <br></br>
            <br />
            dolor sit amet consectetur adipisicing elit. Vel esse natus,
            sapiente debitis perferendis nam porro deleniti. Nisi molestiae
            sapiente, ipsa amet magnam voluptatibus quia placeat quas illum
            velit porro perspiciatis ipsam autem totam animi at quod
            consequuntur eaque similique.
          </p>
        </div>
      </Div>
    </div>
  </Layout>
);

export default IndexPage;
