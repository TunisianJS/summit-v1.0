import React from 'react';
const defaultPhoto = require('../Common/images/324x380.png');

const speakersDetails = [
  {
    talkPageUrl: '/talks/talk-1/',
    speakersName: 'Full Name',
    speakersImg: defaultPhoto,
    speakersDesignation: (
      <span>
        Talk Title,
        <br />
        Company Name
      </span>
    ),
  },
];

const talkDetailsPage = [
  {
    url: '/talks/talk-1/',
    metaTags: {
      title: 'Talk Title',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Talk Title ',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '08:00 am -	08:30 am',
    talkType: 'Fireside Chat',
    description: [
      {
        desc: 'Coming Soon',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/dan-schafer/',
        speakersName: 'Full Name',
        speakersImg: defaultPhoto,
        speakersBio: 'speakers Bio',
        speakersDesignation: (
          <span>
          Talk Title,
          <br />
          Company Name
        </span>
        ),
      },
    ],
  },
];

const scheduleDetailsOne = [
  {
    type: 'break',
    title: 'Conference Begins',
    time: '10:25 am',
  },
  {
    url: '/talks/talk-1/',
    type: 'talk',
  },
];

const scheduleDetailsTwo = [
  {
    type: 'break',
    title: 'Day 2 Begins',
    time: '07:55 am',
  },
  {
    url: '/talks/talk-1/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '08:55 am - 09:10 am',
  },
];

export {
  speakersDetails,
  talkDetailsPage,
  scheduleDetailsOne,
  scheduleDetailsTwo
};
