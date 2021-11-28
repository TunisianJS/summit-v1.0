import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import WorkshopsList from '../components/Workshops/WorkshopsList';
const WorkshopsPage = (props) => (
  <Layout location={props.location}>
    <SEO
       title="Tunisian Js Community 2021"
       description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
       metaImg=""
       canonicalLink="https://js-community.tn/"    />
    <WorkshopsList />
  </Layout>
);

export default WorkshopsPage;
