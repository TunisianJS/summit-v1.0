import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import SpeakersList from '../components/Speakers/SpeakersList';
const SpeakersPage = (props) => (
  <Layout location={props.location}>
    <SEO
       title="Tunisian Js Community 2021"
       description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
       metaImg=""
       canonicalLink="https://js-community.tn/"   />
    <SpeakersList />
  </Layout>
);

export default SpeakersPage;
