import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import TalksList from '../components/Talks/TalksList';
const TalksPage = (props) => (
  <Layout location={props.location}>
    <SEO
         title="Tunisian Js Community 2021"
         description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
         metaImg=""
         canonicalLink="https://js-community.tn/"  />
    <TalksList />
  </Layout>
);

export default TalksPage;
