import React from 'react';

const abdennour =  require('../Common/images/abdennour.jpg');

const aymen = require('../Common/images/aymen.jpg');

const burawi = require('../Common/images/burawi.png');

const haykel = require('../Common/images/haykel.jpg');

const nacer = require('../Common/images/nacer.jpg');

const speakersDetails = [
  {
    talkPageUrl: '/talks/in-mem-sub-pub-with-mufa/',
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
    talkPageUrl: '/talks/nestjs-the-trendy-nodejs-framework/',
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
  {
    talkPageUrl: '/talks/an-arabic-version-of-javascript/',
    speakersName: 'Burawi Ben Ammar',
    speakersImg: burawi,
    speakersDesignation: (
      <span>
  An Arabic version of Javascript. Why ?
  <br />
  Senior Full Stack Developer at Think-it
</span>
    ),
  },
  {
    talkPageUrl: '/talks/enhanced-developer-experience-with-nx/',
    speakersName: 'Haykel Ben Jemia',
    speakersImg: haykel,
    speakersDesignation: (
      <span>
        Enhanced developer experience with Nx.
        <br />
        CTO at xTECH
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
    speakersName: 'Nacer Nsiri',
    speakersImg: nacer,
    speakersDesignation: (
      <span>
      SOLID principles between theory and practice in JavaScript.
      <br />
      Senior FrontEnd Engineer at Oodrive
    </span>
    ),
  },
  /*
   
  */
];

const talkDetailsPage = [
  {
    url: '/talks/in-mem-sub-pub-with-mufa/',
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
          Nest.js the trendy Node.js Framework
          <br />
          Teacher at INSAT
        </span>
        ),
      },
    ],
  },
{
  url: '/talks/an-arabic-version-of-javascript/',
  metaTags: {
    title: 'An Arabic version of Javascript. Why ?',
    canonicalUrl: '',
    description: 'Coming Soon',
    metaImg: '',
  },
  title: 'An Arabic version of Javascript. Why ?',
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
      speakersUrl: '/speakers/burawi-ben-ammar/',
      speakersName: 'Burawi Ben Ammar',
      speakersImg: burawi,
      speakersBio: 'He is a developer that companies call senior because he has experience of 8 years in web development and a Node.js certification from OpenJS - The Linux Foundation.',
      speakersDesignation: (
        <span>
        An Arabic version of Javascript. Why ?
        <br />
        Senior Full Stack Developer at Think-it
      </span>
      ),
    },
  ],
},
{
  url: '/talks/enhanced-developer-experience-with-nx/',
  metaTags: {
    title: 'Enhanced developer experience with Nx.',
    canonicalUrl: '',
    description: 'Coming Soon',
    metaImg: '',
  },
  title: 'Enhanced developer experience with Nx.',
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
      speakersUrl: '/speakers/haykel-ben-jemia/',
      speakersName: 'Haykel Ben Jemia',
      speakersImg: haykel,
      speakersBio: 'He wrote his first line of code at 15 years old using BASIC and never stopped writing code since then. He is still passionate about software development, more specifically developing full stack web applications using JavaScript and serverless technologies.',
      speakersDesignation: (
        <span>
        Enhanced developer experience with Nx.
        <br />
        CTO at xTECH
      </span>
      ),
    },
  ],
},
{
  url: '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
  metaTags: {
    title: 'SOLID principles between theory and practice in JavaScript.',
    canonicalUrl: '',
    description: 'Coming Soon',
    metaImg: '',
  },
  title: 'SOLID principles between theory and practice in JavaScript.',
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
      speakersUrl: '/speakers/nacer-nsiri/',
      speakersName: 'Nacer Nsiri',
      speakersImg: nacer,
      speakersBio: 'He has held various positions across his 7 years career such as Technical Lead and Senior Software engineer Frontend, Backend, and Fullstack, has a Node.js certification from OpenJS - The Linux Foundation, always sharing knowledge and assisting coworkers, always looking for challenges, striving for continuous self-improvement.',
      speakersDesignation: (
        <span>
        SOLID principles between theory and practice in JavaScript.
        <br />
        Senior FrontEnd Engineer at Oodrive
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
    url: '/talks/in-mem-sub-pub-with-mufa/',
    type: 'talk',
  },
  {
    url: '/talks/nestjs-the-trendy-nodejs-framework/',
    type: 'talk',
  },
  {
    url: '/talks/an-arabic-version-of-javascript/',
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
    url: '/talks/enhanced-developer-experience-with-nx/',
    type: 'talk',
  },
  {
    url: '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
    type: 'talk',
  },
];

export {
  speakersDetails,
  talkDetailsPage,
  scheduleDetailsOne,
  scheduleDetailsTwo
};
