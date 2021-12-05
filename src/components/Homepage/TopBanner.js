import React from 'react';
import { Link } from 'gatsby';

import '../Common/Styles.scss';

const TopBanner = () => {
  return (
    <div className="topBannerWrapper sectionWrapperBottom">
      <div className="mainTitle">Tunisia JS Community Conf. is Back</div>
      <div className="articleSectionTitle">
        Join us on 11th & 12th and 18th & 19th December for the fist edition of Tunisian JS summit
        happening online and free!
      </div>

      <div className="buttonWrapper">
        <a href='https://forms.gle/k2wSfVWztcocTkA98' target='_blank' rel='noopener noreferrer'>
          <button className="commonBtn darkBtn">Register Now</button>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
