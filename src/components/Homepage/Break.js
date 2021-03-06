import React from "react";
import '../Common/Styles.scss';
const star = require('../Common/images/star.svg');

const Break = ({ breakDetails }) => {
  return (
    <li className='breakWrapper scheduleList'>
      <div className='time articleDesc'>
        {breakDetails.time ? breakDetails.time : ''}
        <div className='istBtnMobile articleDesc fontBold'>
          CET <smal>(UTC +1)</smal>
          <div className='istBtnHover'>Tunisia Time</div>
        </div>
      </div>
      <div className='articleDesc fontBold'>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <span>{breakDetails.title}</span>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
      </div>
    </li>
  );
};

export default Break;
