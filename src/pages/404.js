import React from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import '../components/Common/Styles.scss';
const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO
      title="404: Not found"
      description="Tunisian Js Community is the largest gathering of the Js community in Tunisia!"
      metaImg=""
      canonicalLink="https://js-community.tn/"
    />
    <div className="notFoundWrapper">
      <div className="mainTitle">NOT FOUND</div>
      <div className="articleDesc">You just hit a route that doesn&#39;t exist... the sadness.</div>
    </div>
  </Layout>
);

export default NotFoundPage;
