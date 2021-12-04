import React, { Fragment, useState } from 'react';
import Break from './Break';
import IndivSchedule from './IndivSchedule';
import '../Common/Styles.scss';
import {
  talkDetailsPage,
  scheduleDetailsOne,
  scheduleDetailsTwo,
  scheduleDetailsThree,
  scheduleDetailsFour
} from '../Homepage/AllState.js';

const talksLight = require('../Common/images/talks-light.svg');

const talksDark = require('../Common/images/talks-dark.svg');

const Schedule = props => {
  const [currentTab, setCurrentTab] = useState('talks');

  const [dayTab, setDayTab] = useState('dayOne');


  const dayOneShedule = scheduleDetailsOne.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);

    const currentTalks = currenttalksFilter[0];

    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === 'break' ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  const dayTwoShedule = scheduleDetailsTwo.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);

    const currentTalks = currenttalksFilter[0];

    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === 'break' ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  const dayThreeShedule = scheduleDetailsThree.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);

    const currentTalks = currenttalksFilter[0];

    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === 'break' ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  const dayFourShedule = scheduleDetailsFour.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);

    const currentTalks = currenttalksFilter[0];

    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === 'break' ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  return (
    <div id='schedule' className={'sectionWrapper' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='scheduleWrapper'>
        <div className='scheduleHeader'>
          <div className='articleSubTitle'>Schedule</div>
          <div className='buttonWrapper'>
            <button onClick={() => { setCurrentTab('talks'); setDayTab('dayOne') }} className={'commonBtn ' + ((currentTab === 'talks') ? 'darkRedBtn' : 'transparentBtn')}>
              {
                !props.isLightMode ? (
                  <img src={talksLight} alt='Icon' />
                ) : (
                  <Fragment>
                    {
                      currentTab === 'talks' ? (
                        <img src={talksLight} alt='Icon' />
                      ) : (
                        <img src={talksDark} alt='Icon' />
                      )
                    }

                  </Fragment>
                )
              }
              Talks
            </button>
          </div>
        </div>
        <div className='dateTab'>
          <button onClick={() => { setDayTab('dayOne'); }} className={'commonBtn ' + ((dayTab === 'dayOne') ? 'darkBlockBtn' : 'transparentBtn')}>11th Dec</button>
          {
            currentTab === 'talks' ? (
              <button onClick={() => { setDayTab('dayTwo') }} className={'commonBtn ' + ((dayTab === 'dayTwo') ? 'darkBlockBtn' : 'transparentBtn')}>12th Dec</button>
            ) : null
          }
          {
            currentTab === 'talks' ? (
              <button onClick={() => { setDayTab('dayThree') }} className={'commonBtn ' + ((dayTab === 'dayThree') ? 'darkBlockBtn' : 'transparentBtn')}>18th Dec</button>
            ) : null
          }
          {
            currentTab === 'talks' ? (
              <button onClick={() => { setDayTab('dayFour') }} className={'commonBtn ' + ((dayTab === 'dayFour') ? 'darkBlockBtn' : 'transparentBtn')}>19th Dec</button>
            ) : null
          }

        </div>
        <ul className='scheduleListHeader scheduleListWrapper removeBorBottom'>
          <li className='scheduleList'>
            <div className='time articleSectionTitle fontBold'>
              TIME
              <div className='istBtn articleDesc fontBold'>
                CET <smal>(UTC +1)</smal>
                <div className='istBtnHover'>Tunisia Time</div>
              </div>
            </div>
            <div className='scheduleDetailsWrapper'>
              <div className='time articleSectionTitle fontBold'>
                EVENT
              </div>
              <div className='time articleSectionTitle fontBold'>
                SPEAKERS
              </div>
            </div>
          </li>
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayOne' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayOneShedule}
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayTwo' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayTwoShedule}
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayThree' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayThreeShedule}
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayFour' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayFourShedule}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
