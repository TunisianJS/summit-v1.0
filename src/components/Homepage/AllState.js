import React from 'react';
const defaultPhoto = require('../Common/images/324x380.png');

const abdennour =  require('../Common/images/abdennour.jpg');

const aymen = require('../Common/images/aymen.jpg');

const speakersDetails = [
  {
    talkPageUrl: '/talks/talk-1/',
    speakersName: 'Abdennour Toumi',
    speakersImg: abdennour,
    speakersDesignation: (
      <span>
          In-mem sub/pub with Mufa,
          <br />
          Site Reliability Engineer at ELM
        </span>
    ),
  },
  {
    talkPageUrl: '/talks/nestjs-the-trendy-nodejs-framework',
    speakersName: 'Aymen sellaouti',
    speakersImg: aymen,
    speakersDesignation: (
      <span>
      Nest.js the trendy Node.js Framework
      <br />
      Teacher at INSAT
    </span>
    ),
  },
];

const talkDetailsPage = [
  {
    url: '/talks/talk-1/',
    metaTags: {
      title: 'In-mem sub/pub with Mufa',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'In-mem sub/pub with Mufa',
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
        speakersUrl: '/speakers/abdennour-toumi/',
        speakersName: 'Abdennour Toumi',
        speakersImg: abdennour,
        speakersBio: '-',
        speakersDesignation: (
          <span>
          In-mem sub/pub with Mufa,
          <br />
          Site Reliability Engineer at ELM
        </span>
        ),
      },
    ],
  },
  {
    url: '/talks/nestjs-the-trendy-nodejs-framework/',
    metaTags: {
      title: 'Nest.js the trendy Node.js Framework.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Nest.js the trendy Node.js Framework.',
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
        speakersUrl: '/speakers/aymen-sellaouti/',
        speakersName: 'Aymen sellaouti',
        speakersImg: aymen,
        speakersBio: 'He has a Ph.D. in Computer Science since January 2014 from the University of Strasbourg and the Faculty of Sciences of Tunis. He has been teaching at INSAT since 2013. Also, He is a consultant, doing professional training for 4 years on Symfony Angular and Nest.js and a content creator, co-creator of the Techwall YT channel. He coached the INSAT problem-solving teams where they won the last 4 TCPCs by participating in the ACPC and being the first Tunisian team to participate in the ICPC.',
        speakersDesignation: (
          <span>
          Nest.js the trendy Node.js Framework.,
          <br />
          Teacher at INSAT
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
