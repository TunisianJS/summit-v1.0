import React from 'react';

const abdennour = require('../Common/images/abdennour.png');

const aymen = require('../Common/images/aymen.jpg');

const burawi = require('../Common/images/burawi.png');

const haykel = require('../Common/images/haykel.jpg');

const nacer = require('../Common/images/nacer.jpg');

const sameh = require('../Common/images/sameh.jpg');

const zied = require('../Common/images/zied.jpg');

const khaled = require('../Common/images/khaled.jpg');

const haythem = require('../Common/images/haythem.png');

const ahmed = require('../Common/images/ahmed.jpeg');

const walid = require('../Common/images/valid.jpeg');

const speakersDetails = [
  {
    talkPageUrl: '/talks/in-mem-sub-pub-with-mufa/',
    speakersName: 'Abdennour Toumi',
    speakersImg: abdennour,
    speakerJob: 'Architect at ELM',
    speakersDesignation: (
      <span>
        In-mem sub/pub with Mufa,
        <br />
        Architect at ELM
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
    speakersName: 'Nacer Nsiri',
    speakersImg: nacer,
    speakerJob: 'Senior FrontEnd Engineer at Oodrive',
    speakersDesignation: (
      <span>
        SOLID principles between theory and practice in JavaScript.
        <br />
        Senior FrontEnd Engineer at Oodrive
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/an-arabic-version-of-javascript/',
    speakersName: 'Burawi Ben Ammar',
    speakersImg: burawi,
    speakerJob: 'Senior Full Stack Developer at Think-it',
    speakersDesignation: (
      <span>
        An Arabic version of Javascript. Why ?
        <br />
        Senior Full Stack Developer at Think-it
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/kubernetes-runtime-security-using-falco/',
    speakersName: 'Walid Dridi',
    speakersImg: walid,
    speakerJob: 'DevOps/SRE at Radio France',
    speakersDesignation: (
      <span>
        Kubernetes Runtime Security using Falco.
        <br />
        DevOps/SRE at Radio France
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/enhanced-developer-experience-with-nx/',
    speakersName: 'Haykel Ben Jemia',
    speakersImg: haykel,
    speakerJob: 'CTO at xTECH',
    speakersDesignation: (
      <span>
        Enhanced developer experience with Nx.
        <br />
        CTO at xTECH
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/nestjs-the-trendy-nodejs-framework/',
    speakersName: 'Aymen Sellaouti',
    speakersImg: aymen,
    speakerJob: 'Teacher at INSAT',
    speakersDesignation: (
      <span>
        Nest.js the trendy Node.js Framework
        <br />
        Teacher at INSAT
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/lessons-learned-from-a-functional-language/',
    speakersName: 'Sameh Ghanmi',
    speakersImg: sameh,
    speakerJob: 'FrontEnd Engineer at Mirakl',
    speakersDesignation: (
      <span>
        Lessons learned from a functional language.
        <br />
        FrontEnd Engineer at Mirakl
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/functional-patterns-with-typescript/',
    speakersName: 'Zied Younes',
    speakersImg: zied,
    speakerJob: 'CTO at Craft Foundry',
    speakersDesignation: (
      <span>
        Functional Patterns with Typescript.
        <br />
        CTO at Craft Foundry
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/developer-friendly-apis-using-es6-proxies/',
    speakersName: 'Khaled Garbaya',
    speakersImg: khaled,
    speakerJob: 'Engineering Manager at Gatsby',
    speakersDesignation: (
      <span>
        Developer friendly APIs using ES6 Proxies.
        <br />
        Engineering Manager at Gatsby
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/understand-and-perform-sql-injection-attacks/',
    speakersName: 'Haythem Jerbi',
    speakersImg: haythem,
    speakerJob: 'Network Engineering Consultant and Trainer at TEK-UP',
    speakersDesignation: (
      <span>
        Understand and perform SQL Injection Attacks.
        <br />
        Network Engineering Consultant and Trainer at TEK-UP
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/javascript-runtimes-node-vs-deno/',
    speakersName: 'Ahmed Bessrour',
    speakersImg: ahmed,
    speakerJob: 'Senior Full Stack JS Developer at xxxx',
    speakersDesignation: (
      <span>
        JavaScript runtimes: NODE vs DENO
        <br />
        Senior Full Stack JS Developer at xxxx
      </span>
    ),
  },
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
    language: 'Arabic',
    time: ' 06:20 pm -	07:40 pm',
    talkType: undefined,
    description: [
      {
        desc: '11/12/2021 from 06:20 pm to 07:40 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/abdennour-toumi/',
        speakersName: 'Abdennour Toumi',
        speakersImg: abdennour,
        speakerJob: 'Architect at ELM',
        speakersBio: 'He is a practical Architect with SRE focus, cloud-native by design, software engineering as background, the mastermind behind many opensource tools, An active contributor at Stack Overflow & Top 2 at country 🇹🇳 level, Owner of \'kubernetes.tn\' and certified Red Hat Architect level 4, AWS Solutions Architect Pro., CKA/CKAD/CKS and more.',
        speakersDesignation: (
          <span>
            In-mem sub/pub with Mufa,
            <br />
            Architect at ELM
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
    language: 'Arabic',
    time: '07:45 pm -	09:05 pm',
    talkType: undefined,
    description: [
      {
        desc: '11/12/2021 from 07:45 pm to 09:05 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/aymen-sellaouti/',
        speakersName: 'Aymen Sellaouti',
        speakersImg: aymen,
        speakerJob: 'Teacher at INSAT',
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
    language: 'Arabic',
    time: '07:45 pm -	9:05 pm',
    talkType: undefined,
    description: [
      {
        desc: '12/12/2021 from 07:45 pm to 09:05 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/burawi-ben-ammar/',
        speakersName: 'Burawi Ben Ammar',
        speakersImg: burawi,
        speakersBio: 'He is a developer that companies call senior because he has experience of 8 years in web development and a Node.js certification from OpenJS - The Linux Foundation.',
        speakerJob: 'Senior Full Stack Developer at Think-it',
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
    language: 'Arabic',
    time: '06:20 pm -	07:40 pm',
    talkType: undefined,
    description: [
      {
        desc: '12/12/2021 from 06:20 pm to 07:40 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/haykel-ben-jemia/',
        speakersName: 'Haykel Ben Jemia',
        speakersImg: haykel,
        speakersBio: 'He wrote his first line of code at 15 using BASIC and never stopped writing code since then. He is still passionate about software development, more specifically developing full stack web applications using JavaScript and serverless technologies.',
        speakerJob: 'CTO at xTECH',
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
    url: '/talks/kubernetes-runtime-security-using-falco/',
    metaTags: {
      title: 'Kubernetes Runtime Security using Falco.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Kubernetes Runtime Security using Falco.',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '07:45 pm -	09:05 pm',
    talkType: undefined,
    description: [
      {
        desc: '19/12/2021 from 07:45 pm to 09:05 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/walid-dridi/',
        speakersName: 'Walid Dridi',
        speakersImg: walid,
        speakersBio: 'He is a Kubernetes Consultant/Trainer and CKAD/CKA/CKS Certified. He is interested in cloud-native and software engineering techniques applied to operations.',
        speakerJob: 'DevOps/SRE at Radio France',
        speakersDesignation: (
          <span>
            Kubernetes Runtime Security using Falco.
            <br />
            DevOps/SRE at Radio France
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
    language: 'Arabic',
    time: '09:10 pm -	10:30 pm',
    talkType: undefined,
    description: [
      {
        desc: '11/12/2021 from 09:10 pm to 10:30 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/nacer-nsiri/',
        speakersName: 'Nacer Nsiri',
        speakersImg: nacer,
        speakersBio: 'He has held various positions across his 7 years career such as Technical Lead and Senior Software engineer Frontend, Backend, and Fullstack, has a Node.js certification from OpenJS - The Linux Foundation, always sharing knowledge and assisting coworkers, always looking for challenges, striving for continuous self-improvement.',
        speakerJob: 'Senior FrontEnd Engineer at Oodrive',
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
  {
    url: '/talks/lessons-learned-from-a-functional-language/',
    metaTags: {
      title: 'Lessons learned from a functional language.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Lessons learned from a functional language.',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '09:10 pm -	10:30 pm',
    talkType: undefined,
    description: [
      {
        desc: '12/12/2021 from 09:10 pm to 10:30 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/sameh-ghanmi/',
        speakersName: 'Sameh Ghanmi',
        speakersImg: sameh,
        speakersBio: 'He is a seasoned Javascript developer with diverse experiences and a passion for learning and sharing.',
        speakerJob: 'FrontEnd Engineer at Mirakl',
        speakersDesignation: (
          <span>
            Lessons learned from a functional language.
            <br />
            FrontEnd Engineer at Mirakl
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/functional-patterns-with-typescript/',
    metaTags: {
      title: 'Functional Patterns with Typescript.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Functional Patterns with Typescript.',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '09:10 pm -	10:30 pm',
    talkType: undefined,
    description: [
      {
        desc: '18/12/2021 from 09:10 pm to 10:30 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/zied-younes/',
        speakersName: 'Zied Younes',
        speakersImg: zied,
        speakersBio: 'He is a Software Developer who spent a long time coding GIS, logistics, and transportation solutions. He had written his very first line of code at the age of 6, in BASIC on an MSX Sakhr AX-170. Nowadays, he codes mainly with Typescript, Python, and Go-lang. He is very much interested in writing more human-friendly code and understanding the way people express themselves and communicate through code.',
        speakerJob: 'CTO at Craft Foundry',
        speakersDesignation: (
          <span>
            Functional Patterns with Typescript.
            <br />
            CTO at Craft Foundry
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/developer-friendly-apis-using-es6-proxies/',
    metaTags: {
      title: 'Developer friendly APIs using ES6 Proxies.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Developer friendly APIs using ES6 Proxies.',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '06:20 pm -	07:40 pm',
    talkType: undefined,
    description: [
      {
        desc: '18/12/2021 from 06:20 pm to 07:40 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/khaled-garbaya/',
        speakersName: 'Khaled Garbaya',
        speakersImg: khaled,
        speakersBio: 'He has worked with web technologies for over 12 years. He has always been an early adopter of new and exciting web technologies like Gatsby, eleventy, and blitz.js. He works on a variety of projects with different frameworks and environments, not only on the frontend and browsers but also on the server-side, command-line tools, and other environments capable of running JavaScript. He loves to share his knowledge through e-books and video courses.',
        speakerJob: 'Engineering Manager at Gatsby',
        speakersDesignation: (
          <span>
            Developer friendly APIs using ES6 Proxies.
            <br />
            Engineering Manager at Gatsby
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/understand-and-perform-sql-injection-attacks/',
    metaTags: {
      title: 'Understand and perform SQL Injection Attacks.',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'Understand and perform SQL Injection Attacks.',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '07:45 pm -	09:05 pm',
    talkType: undefined,
    description: [
      {
        desc: '18/12/2021 from 07:45 pm to 09:05 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/haythem-jerbi/',
        speakersName: 'Haythem Jerbi',
        speakersImg: haythem,
        speakersBio: 'He is a network engineer with a graduate degree and a passion for system and network administration and security. He has 3 years of experience as a consultant and trainer, delivering training to several enterprises like TEK-UP and SIMOP. He has also participated in many national and international prestigious competitions like the Huawei ICT competition and TITC (Tekonsult International Telecommunications Contest).',
        speakerJob: 'Network Engineering Consultant and Trainer at TEK-UP',
        speakersDesignation: (
          <span>
            Understand and perform SQL Injection Attacks.
            <br />
            Network Engineering Consultant and Trainer at TEK-UP
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/javascript-runtimes-node-vs-deno/',
    metaTags: {
      title: 'JavaScript runtimes: NODE vs DENO',
      canonicalUrl: '',
      description: 'Coming Soon',
      metaImg: '',
    },
    title: 'JavaScript runtimes: NODE vs DENO',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Arabic',
    time: '09:10 pm -	10:30 pm',
    talkType: undefined,
    description: [
      {
        desc: '19/12/2021 from 09:10 pm to 10:30 pm',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/ahmed-bessrour/',
        speakersName: 'Ahmed Bessrour',
        speakersImg: ahmed,
        speakersBio: 'He is a Software Craftsman.',
        speakerJob: 'Senior Full Stack JS Developer at xxxx',
        speakersDesignation: (
          <span>
            JavaScript runtimes: NODE vs DENO
            <br />
            Senior Full Stack JS Developer at xxxx
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
    time: '6:00 pm',
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
    url: '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
    type: 'talk',
  },
];

const scheduleDetailsTwo = [
  {
    type: 'break',
    title: 'Day 2 Begins',
    time: '6:00 pm',
  },
  {
    url: '/talks/enhanced-developer-experience-with-nx/',
    type: 'talk',
  },
  {
    url: '/talks/an-arabic-version-of-javascript/',
    type: 'talk',
  },
  {
    url: '/talks/lessons-learned-from-a-functional-language/',
    type: 'talk',
  },
];

const scheduleDetailsThree = [
  {
    type: 'break',
    title: 'Day 3 Begins',
    time: '6:00 pm',
  },
  {
    url: '/talks/developer-friendly-apis-using-es6-proxies/',
    type: 'talk'
  },
  {
    url: '/talks/understand-and-perform-sql-injection-attacks/',
    type: 'talk'
  },
  {
    url: '/talks/functional-patterns-with-typescript/',
    type: 'talk'
  },
]

const scheduleDetailsFour = [
  {
    type: 'break',
    title: 'Day 4 Begins',
    time: '6:00 pm',
  },
  {
    url: '/talks/kubernetes-runtime-security-using-falco/',
    type: 'talk'
  },
  {
    url: '/talks/javascript-runtimes-node-vs-deno/',
    type: 'talk'
  }
]

export {
  speakersDetails,
  talkDetailsPage,
  scheduleDetailsOne,
  scheduleDetailsTwo,
  scheduleDetailsThree,
  scheduleDetailsFour
};
