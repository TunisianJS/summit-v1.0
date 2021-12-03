import React from "react";
import IconHover from './IconHover';
import '../Common/Styles.scss';

const discordLightMode = require('./images/discord-light-mode.svg');

const linkedinLightMode = require('./images/linkedin-light-mode.svg');

const twitterLightMode = require('./images/twitter-light-mode.svg');

const discordHover = require('./images/discord-hover.svg');

const linkedinHover = require('./images/linkedin-hover.svg');

const twitterHover = require('./images/twitter-hover.svg');

const Footer = ({ isLightMode }) => {
  return (
    <div className='footerWrapper sectionWrapper removePaddBottom'>
      <ul className='articleDesc'>
        <li className='lightModeBorRight'><a href='mailto:contact@js-community.tn'>Sponsor Tunisian JS Community 2021</a></li>
        <li><a href='mailto:contact@js-community.tn'>Contact us</a></li>
      </ul>
      <div className='articleDesc'>
        © {(new Date().getFullYear())} Tunisian JS Community. All rights reserved
      </div>
      <div className='footerLogoWrapper'>
        <div className='poweredLogo'>
          logo
        </div>
        <div className='socialIconWrapper'>
          <a href='https://discord.com/invite/hasura' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc={discordLightMode}
              hoverImgSrc={discordHover}
              altText='Discord'
            />
          </a>
          <a href='https://www.linkedin.com/company/tunisian-javascript-community' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc={linkedinLightMode}
              hoverImgSrc={linkedinHover}
              altText='Discord'
            />
          </a>
          <a href='https://twitter.com/TunisisJs' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc={twitterLightMode}
              hoverImgSrc={twitterHover}
              altText='Discord'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
