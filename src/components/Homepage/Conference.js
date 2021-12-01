import React from 'react';
import '../Common/Styles.scss';
const lightArrow = require('../Common/images/light-arrow.svg');

const darkArrow = require('../Common/images/dark-arrow.svg');

const lightArrowLine = require('../Common/images/light-arrow-line.svg');

const darkarrowLine = require('../Common/images/dark-arrow-line.svg');

const Conference = (props) => {
  return (
    <div
      id="about"
      className={
        'conferenceWrapper sectionWrapper' +
        (!props.isLightMode ? ' darkModeBorBottom' : ' lightModeBorBottom')
      }
    >
      <div>
        <div className="articleSubTitle">About Tunisian JS Community</div>
        <div className="articleDesc">
          Tunisian JS - Community : We are group of JavaScript enthusiasts in Tunisia We discuss js
          tips, tricks, hacks and framework each month in Tunisia.We meet to share information,
          demos, new technologies, ask questions and learn together.We cover client - side and
          server - side JavaScript innovation in the local tech community.
        </div>
      </div>
      <div className="alignSelfEnd">
        <div className="articleSectionTitle">Check out our past conferences for more on us.</div>
        <div className="commonLinkWrapper">
          <div className="commonLink">
            <a href="http://summit.js-community.tn/" target="_blank" rel="noopener noreferrer">
              Summit v1.0
              <div className="arrow">
                <img
                  className="arrowIcon"
                  src={!props.isLightMode ? lightArrow : darkArrow}
                  alt="Arrow"
                />
                <img
                  className="arrowIconHover"
                  src={!props.isLightMode ? lightArrowLine : darkarrowLine}
                  alt="Arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
