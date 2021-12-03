import React from 'react';

import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import RegisterTopBanner from '../components/Register/RegisterTopBanner';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Tunisian JS Community 2021"
        description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
        metaImg=""
        canonicalLink="https://js-community.tn/" />
      <RegisterTopBanner location={location} />
    </Layout>
  );
};

export default IndexPage;
