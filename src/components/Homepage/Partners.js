import React from 'react';
import '../Common/Styles.scss';

const almadmoon = require('../Common/images/3almadmoon.svg');

const pocteo = require('../Common/images/pocteo.png');

const bestwebmobile = require('../Common/images/bestwebmobile.png')

const lollipop = require('../Common/images/lollipop.png');

const level1 = require('../Common/images/level1.png');

const hive12 = require('../Common/images/hive12.png');

const five = require('../Common/images/five.png');

const Partners = (props) => {
  return (
    <div>
      <div
        id="sponsorship"
        className={
          'communityPartnersWrapper sectionWrapper ' +
          (!props.isLightMode ? 'darkModeBorBottom' : 'lightModeBorBottom')
        }
      >
        <div className="articleSubTitle">Sponsors</div>

        {
          <div className="communityPartnersHeader">
            <div className="articleSectionTitle">
              <p>
                For this event, there are no sponsors, <br />
                but if would you like to support a growing JS community in Tunisia and improve the
                visibility of your tech/employer brand? reach out to Tunisia Js Community at {` `}
                <a href="mailto:contact@js-community.tn">contact@js-community.tn</a>
              </p>
            </div>
          </div>
        }
      </div>
      <div
        id="community-partners"
        className={
          'communityPartnersWrapper sectionWrapper ' +
          (!props.isLightMode ? 'darkModeBorBottom' : 'lightModeBorBottom')
        }
      >
        {/*
        almadmoon
pocteo   
lollipop 
level1   
hive12   
five     
        */}
        <div className="articleSubTitle">Community Partners</div>
        <div className="partnersBrandWrapper">
          <a href="https://3almadmoonservices.com/" target="_blank" rel="noopener noreferrer">
            <img src={almadmoon} alt="" />
          </a>
          <a href="https://pocteo.co/" target="_blank" rel="noopener noreferrer">
            <img src={pocteo} alt="" />
          </a>
          <a href="http://bestwebmobile.com/" target="_blank" rel="noopener noreferrer">
            <img src={bestwebmobile} alt="" />
          </a>

          <a
            href="https://www.facebook.com/Lollipop.coworking.space.bizerte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lollipop} alt="" />
          </a>
          <a href="http://www.level1hub.com/" target="_blank" rel="noopener noreferrer">
            <img src={level1} alt="" />
          </a>
          <a
            href="https://hive12-coworking-space.business.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hive12} alt="" />
          </a>
          <a href="http://fivepoints.tn/" target="_blank" rel="noopener noreferrer">
            <img src={five} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
