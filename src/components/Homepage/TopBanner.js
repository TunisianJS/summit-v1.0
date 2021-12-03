import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import '../Common/Styles.scss';
import MarketoForm from '../Common/marketoform';
const marketoHost = 'https://page.hasura.io';




const checkIcon = require('../Common/images/check-icon.svg');

const TopBanner = (props) => {
  const [isAliId, setIsAliId] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);

    const searchAliId = searchParams.get('aliId');

    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
    }
  }, [props.location.search]);
  return (
    <div className="topBannerWrapper sectionWrapperBottom">
      <div className="mainTitle">Tunisia Js Community Conf is Back</div>
      <div className="articleSectionTitle">
        Join us on 11th & 12th Dec for the fist edition of Tunisian Js summit
         happening online and free!
        And this time we{`'`}re accepting talks.
      </div>
   
      {
      <div className="buttonWrapper">
        <Link to="">
          <button className="commonBtn darkBtn">Register Now</button>
        </Link>
      </div>
      /**/}
    </div>
  );
};

export default TopBanner;
