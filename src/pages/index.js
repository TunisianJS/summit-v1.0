import React from 'react';
import TopBanner from '../components/Homepage/TopBanner';
import Conference from '../components/Homepage/Conference';
import Speakers from '../components/Homepage/Speakers';
import Partners from '../components/Homepage/Partners';
// import JoinGraphQLCommunity from '../components/Homepage/JoinGraphQLCommunity';

import Talks from '../components/Homepage/Talks';
import Schedule from '../components/Homepage/Schedule';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO
      title="Tunisian Js Community 2021"
      description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
      metaImg=""
      canonicalLink="https://js-community.tn/"
    />
    <TopBanner location={props.location} />
    {/* <Video /> */}
    <Speakers />
    <Talks />
    <Schedule />
    <Partners />
    {/* <JoinGraphQLCommunity /> */}
    <Conference />
  </Layout>
);

export default IndexPage;
