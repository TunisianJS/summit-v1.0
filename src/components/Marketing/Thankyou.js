import React from 'react';
import Talks from '../Homepage/Talks'
import Layout from '../Layout';
import ThankyouTopBanner from './ThankyouTopBanner';

export const Thankyou = ({location}) => {
  return (
    <Layout location={location}>
      <ThankyouTopBanner />
      <Talks  wdClass = 'wd60'/>
    </Layout>
  );
}
