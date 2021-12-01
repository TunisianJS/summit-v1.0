import React from 'react';
import '../Common/Styles.scss';
const reactBangaloreDark = require('../Common/images/react-bangalore-dark.svg');

const graphQLBangaloreDark = require('../Common/images/graphql-bangalore-dark.svg');

const womenCodeDark = require('../Common/images/women-code-dark.svg');

const graphqlSingaporDark = require('../Common/images/graphql-singapor-dark.svg');

const jsDark = require('../Common/images/js-dark.svg');

const graphqlSydneyDark = require('../Common/images/graphql-sydney-dark.svg');

const graphqlCopenhagenDark = require('../Common/images/graphql-copenhagen-dark.svg');

const graphqlAmsterdamDark = require('../Common/images/graphql-amsterdam-dark.svg');

const reactBangaloreLight = require('../Common/images/react-bangalore-light.svg');

const graphQLBangaloreLight = require('../Common/images/graphql-bangalore-light.svg');

const womenCodeLight = require('../Common/images/women-code-light.svg');

const graphqlSingaporLight = require('../Common/images/graphql-singapor-light.svg');

const jsLight = require('../Common/images/js-light.svg');

const graphqlSydneyLight = require('../Common/images/graphql-sydney-light.svg');

const graphqlCopenhagenLight = require('../Common/images/graphql-copenhagen-light.svg');

const graphqlAmsterdamLight = require('../Common/images/graphql-amsterdam-light.svg');

const atlassianLight = require('../Common/images/atlassian-light.svg');

const atlassianDark = require('../Common/images/atlassian-dark.svg');

const yugabyteLight = require('../Common/images/yugabyte-light.png');

const yugabyteDark = require('../Common/images/yugabyte-dark.png');

const graphqlBangkokDark = require('../Common/images/graphql-bangkok-dark.svg');

const reactDelhiDark = require('../Common/images/react-delhi-dark.svg');

const reactPhilippinesDark = require('../Common/images/react-philippines-dark.svg');

const graphqlWroclawDark = require('../Common/images/graphql-wroclaw-dark.svg');

const graphqlBangkokLight = require('../Common/images/graphql-bangkok-light.svg');

const reactDelhiLight = require('../Common/images/react-delhi-light.svg');

const reactPhilippinesLight = require('../Common/images/react-philippines-light.svg');

const graphqlWroclawLight = require('../Common/images/graphql-wroclaw-light.svg');

const download = require('../Common/images/download.svg');

const downloadHover = require('../Common/images/download-hover.svg');

const stackhawkDark = require('../Common/images/stackhawk-dark.png');

const stackhawkLight = require('../Common/images/stackhawk-light.png');

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
        <div className='communityPartnersHeader'>
          <div className='articleSectionTitle'>
          <p>
            For this event, there are no sponsors,  <br />
            but if would you like to support a growing JS community in Tunisia and improve the
            visibility of your tech/employer brand?

            reach out to Tunisia Js Community at {` `}
            <a href="mailto:contact@js-community.tn">
               contact@js-community.tn
            </a>
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
        <div className="articleSubTitle">Community Partners</div>
        <div className="partnersBrandWrapper">
          <a href="https://twitter.com/ReactBangalore" target="_blank" rel="noopener noreferrer">
            <img
              src={!props.isLightMode ? reactBangaloreDark : reactBangaloreLight}
              alt="React bangalore"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Partners;
