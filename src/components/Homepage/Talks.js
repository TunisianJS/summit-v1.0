import React, { Fragment } from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
import IndivTalk from './IndivTalk';
import { talkDetailsPage } from '../Homepage/AllState.js'

const Talks = props => {
  return (
    <div id='talks' className={'sectionWrapper removePaddBottom ' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Talks</div>
        <ul>
          {
            talkDetailsPage.sort((a, b) => a.title > b.title ? 1 : -1)
              .map((talksList, index) => {
                return (
                  <Fragment key={index}>
                    {
                      !talksList.isWorkshop ? (
                        <Fragment>
                          {
                            index < 6 ? (
                              <IndivTalk talksList={talksList} />
                            ) : null
                          }
                        </Fragment>
                      ) : null
                    }
                  </Fragment>
                )
              })
          }
        </ul>
        <div className='backBtnWrapper'>
          <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
          <Link to='/talks/'>
            <button className='commonBtn darkBtn'>
              View all Talks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Talks;
