import React from 'react';
import { Link } from 'gatsby';
import IconHover from './IconHover';
import './Styles.scss';

const discordDarkMode = require('./images/discord-dark-mode.svg');

const linkedinDarkMode = require('./images/linkedin-dark-mode.svg');

const twitterDarkMode = require('./images/twitter-dark-mode.svg');

const discordLightMode = require('./images/discord-light-mode.svg');

const linkedinLightMode = require('./images/linkedin-light-mode.svg');

const twitterLightMode = require('./images/twitter-light-mode.svg');

const discordHover = require('./images/discord-hover.svg');

const linkedinHover = require('./images/linkedin-hover.svg');

const twitterHover = require('./images/twitter-hover.svg');

const LeftSidebar = ({ isLightMode, location }) => {
  const path = location.pathname;

  return (
    <div className="leftSidebarWrapper">
      <div className="brand">
        <Link to="/">
          {/*
          <img src={tunJsCommunity} alt='Brand' />*/}

          <svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 726.17 141.25">
            <path
              className="a"
              d="M237.48 60.4a34.83 34.83 0 00-10.31-6.58 30.61 30.61 0 00-11.32-2.09q-12.37 0-19.72 7.4T188.78 79q0 12.22 6.82 19.38t18.61 7.17a33.11 33.11 0 0023.16-9l-.1 17a44.15 44.15 0 01-11.08 4.66 47.51 47.51 0 01-12.19 1.52q-18.51 0-30.38-11.5T171.75 79q0-17.66 11.9-29.13t30.67-11.47a55.26 55.26 0 0112.16 1.32 54.2 54.2 0 0111.58 4.07zM300.59 91.92a26.6 26.6 0 01-8.17 19.88q-8.18 7.92-20.7 7.93t-20.84-7.93a26.54 26.54 0 01-8.19-19.88A26.57 26.57 0 01250.94 72q8.25-8 20.78-8t20.72 7.88q8.15 7.93 8.15 20.04zm-15.34-.11q0-6.34-3.7-10.12t-9.94-3.79q-6.24 0-9.89 3.76t-3.64 10.15q0 6.34 3.64 10.15t9.89 3.81a13.25 13.25 0 009.92-3.81q3.72-3.81 3.72-10.15zM321.29 117.67h-15.07V65.8h15.07v8.14a25.57 25.57 0 017.91-7.51 19 19 0 019.54-2.38q6.45 0 10.5 2.65a14.3 14.3 0 015.73 8 25.67 25.67 0 018.17-8 21.14 21.14 0 0119.35-.63 14 14 0 015.95 6.1 18 18 0 011.59 5 55 55 0 01.48 8.51v31.94h-15.07V92q0-9.47-1.93-12.58t-6.75-3.12q-5.81 0-8.43 4.33t-2.62 14.17v22.85h-15.07V92q0-9.15-1.79-12.37t-6.19-3.23q-6 0-8.67 4.37t-2.7 14zM414.22 117.67h-15.07V65.8h15.07v8.14a25.68 25.68 0 017.91-7.51 19 19 0 019.54-2.38q6.45 0 10.5 2.65a14.26 14.26 0 015.74 8 25.64 25.64 0 018.16-8 21.16 21.16 0 0119.36-.63 14 14 0 015.95 6.1 17.66 17.66 0 011.58 5 55 55 0 01.48 8.51v31.94h-15.07V92q0-9.47-1.93-12.58t-6.74-3.12q-5.82 0-8.44 4.33t-2.61 14.17v22.85h-15.07V92q0-9.15-1.8-12.37t-6.19-3.23q-6 0-8.67 4.37t-2.7 14zM507.05 65.8v27.28q0 6.87 2.67 9.83t8.7 3q6 0 8.67-3t2.7-9.81V65.8h15.07v27.28q0 13.69-6.4 20.17t-19.83 6.48q-13.69 0-20.12-6.45t-6.42-20.2V65.8zM553.82 117.67V65.8h14.75v8.14a27.48 27.48 0 018.75-7.48 22.33 22.33 0 0110.39-2.41 22.6 22.6 0 0110.13 2 15.08 15.08 0 016.48 6.21 16.78 16.78 0 011.68 4.93 51.45 51.45 0 01.5 8.54v31.94h-15.08V92q0-9.57-2.23-12.64c-1.48-2-4-3.06-7.61-3.06a12.83 12.83 0 00-5.74 1.29 12 12 0 00-4.36 3.68 11.77 11.77 0 00-2 4.23 31.38 31.38 0 00-.61 7.24v24.91zM614.5 44.49a8.84 8.84 0 018.78-8.78 8.61 8.61 0 016.26 2.56 8.36 8.36 0 012.62 6.22 8.45 8.45 0 01-2.62 6.24 8.6 8.6 0 01-6.26 2.59 8.35 8.35 0 01-6.19-2.65 8.53 8.53 0 01-2.59-6.18zm1.32 73.18V65.8h15v51.87zM642.45 117.67V77.59h-7.25V65.8h7.25V48.56h15.07V65.8h7.24v11.79h-7.24v40.08zM689.89 113.65L669 65.8h17.4l9 23.74a28.14 28.14 0 011.48 5.1 58.44 58.44 0 01.9 6.42c.35-1.9.8-3.84 1.32-5.81s1.19-4.07 2-6.29l7.88-23.16h17.24l-30.88 75.45h-16.71z"
            />
            <g opacity=".8">
              <path
                className="c"
                d="M262.3 50.16V10.83h-11.84V7.16h27.61v3.67H266.2v39.33zM278.88 24.11v13c0 4 .57 6.74 1.69 8.37s3 2.44 5.72 2.44 4.57-.83 5.72-2.47 1.73-4.43 1.73-8.34v-13h3.59V39q0 6.08-2.79 9.21t-8.2 3.12q-5.43 0-8.25-3.12T275.27 39V24.11zM304.25 50.16v-26h3.44v4a10.59 10.59 0 013.89-3.74 10.89 10.89 0 015.3-1.25 9.29 9.29 0 016.9 2.47 9.25 9.25 0 012.47 6.87v17.65h-3.67V34.09q0-3.9-1.63-5.8a6.31 6.31 0 00-5-1.89q-4.14 0-6.09 2.45t-1.95 7.71v13.6zM332.21 14a2.64 2.64 0 01.82-2 2.69 2.69 0 012-.8 2.75 2.75 0 012 .8 2.74 2.74 0 010 3.92 2.76 2.76 0 01-2 .8 2.69 2.69 0 01-2-.8 2.62 2.62 0 01-.82-1.92zm.91 36.21v-26h3.73v25.95zM341 45.52l3.44-2a6.42 6.42 0 006.43 4.38 5.41 5.41 0 003.64-1.16 3.9 3.9 0 001.35-3.1q0-3-5.31-5.08c-.37-.14-.67-.26-.88-.36a16.35 16.35 0 01-5.67-3.3 5.87 5.87 0 01-1.64-4.24 7 7 0 012.35-5.45 8.68 8.68 0 016.07-2.13 10.09 10.09 0 015.41 1.38 8 8 0 013.26 3.94l-3.32 1.85a5.24 5.24 0 00-2.13-2.82 6.1 6.1 0 00-3.52-1 4.42 4.42 0 00-3.1 1.1 3.55 3.55 0 00-1.22 2.74 3.4 3.4 0 001.23 2.73 16.06 16.06 0 005 2.32c2.86 1 4.78 2.08 5.77 3.26a7.32 7.32 0 011.48 4.87 7.11 7.11 0 01-2.55 5.73 10.35 10.35 0 01-6.87 2.14 10.47 10.47 0 01-5.72-1.51 8.55 8.55 0 01-3.5-4.29zM363.59 14a2.78 2.78 0 012.79-2.76 2.76 2.76 0 012 .8 2.76 2.76 0 010 3.92 2.77 2.77 0 01-2 .8 2.72 2.72 0 01-2-.8 2.62 2.62 0 01-.79-1.96zm.91 36.21v-26h3.73v25.95zM394.63 50.16V45.4a9.46 9.46 0 01-9.13 5.9 11.51 11.51 0 01-9-3.84q-3.42-3.85-3.42-10.17a15.14 15.14 0 013.37-10.2 11.79 11.79 0 0114.47-2.5 9.61 9.61 0 013.74 4.27v-4.75h3.61v26.05zm-17.56-12.75q0 5.06 2.28 7.78a8 8 0 006.5 2.74 7.85 7.85 0 006.48-3q2.35-3 2.36-8.21a11.2 11.2 0 00-2.35-7.54 8 8 0 00-6.43-2.74 7.87 7.87 0 00-6.46 2.92c-1.59 1.97-2.38 4.64-2.38 8.05zM405.23 50.16v-26h3.44v4a10.52 10.52 0 013.89-3.74 10.84 10.84 0 015.3-1.25 9.32 9.32 0 016.9 2.47 9.29 9.29 0 012.47 6.87v17.65h-3.67V34.09c0-2.6-.55-4.53-1.63-5.8a6.31 6.31 0 00-5-1.89q-4.14 0-6.1 2.45t-2 7.71v13.6z"
              />
            </g>
            <path
              className="d"
              d="M23.57 100a23.79 23.79 0 006.06 4.89 13 13 0 006.14 1.52q6 0 8.4-3.51c1.61-2.34 2.43-6.69 2.43-13.06V8.48h20.12v87.19q0 14.2-7 20.88t-21.82 6.68a37.37 37.37 0 01-14.8-2.82 39.44 39.44 0 01-12.49-8.78zM81.53 97.89l16.2-6.72a20 20 0 008.44 11.41q6.15 3.93 15.69 3.93 9 0 14.37-4.5A15 15 0 00141.56 90q0-9.86-18.25-17.56c-1.7-.77-3-1.33-3.92-1.68q-20.64-9-27.5-16.3A25.07 25.07 0 0185 36.58a27.23 27.23 0 0110.39-22.14Q105.74 6 122.55 6q13.81 0 23.11 4.78a26.07 26.07 0 0112.87 13.7l-15.86 7.33a25.06 25.06 0 00-8.23-7.71 21.07 21.07 0 00-10.27-2.45q-8.19 0-13 3.82a12.39 12.39 0 00-4.81 10.23q0 10.08 21.14 18.78c1.08.46 1.93.82 2.56 1.07q18.51 7.64 25.41 14.93t6.91 18.21q0 15.88-11.17 25.23T121 123.23q-15.95 0-26.13-6.56a30.57 30.57 0 01-13.34-18.78z"
            />
            <path
              className="e"
              d="M13.94 94.66a23.94 23.94 0 006 4.89 13 13 0 006.14 1.52q6 0 8.4-3.51t2.43-13V3.2h20.18v87.19q0 14.19-7 20.88T28.27 118a37.37 37.37 0 01-14.8-2.83A39.44 39.44 0 011 106.34zM71.9 92.6l16.2-6.72a20 20 0 008.44 11.41q6.15 3.94 15.69 3.94 9 0 14.37-4.51a15 15 0 005.33-12.06q0-9.85-18.25-17.56c-1.7-.76-3-1.32-3.92-1.68q-20.64-9-27.5-16.3a25 25 0 01-6.86-17.83A27.23 27.23 0 0185.76 9.15Q96.11.67 112.91.68q13.82 0 23.09 4.77a26.08 26.08 0 0112.88 13.7L133 26.48a25.06 25.06 0 00-8.23-7.71 21.07 21.07 0 00-10.27-2.44q-8.19 0-13 3.81a12.41 12.41 0 00-4.82 10.24q0 10.08 21.15 18.78l2.56 1.07q18.49 7.64 25.41 14.92t6.91 18.21q0 15.89-11.17 25.23T111.38 118q-15.94 0-26.14-6.57A30.6 30.6 0 0171.9 92.6z"
            />
          </svg>
        </Link>
      </div>
      <div className="articleDesc redColor fontBold">
        11th & 12th Dec <br />
        18th & 19th Dec <br />
      </div>
      <ul className="articleDesc">
        <li className={path === '/speakers/' ? 'active' : ''}>
          <Link to="/speakers/">Speakers</Link>
        </li>
        <li className={path === '/talks/' ? 'active' : ''}>
          <Link to="/talks/">Talks</Link>
        </li>
        <li>
          <Link to="/#schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/jobs/">Jobs</Link>
        </li>
        <li>
          <Link to="/#sponsorship">Sponsors</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
      </ul>
      <div className="leftSidebarFooterWrapper">
        <div className="poweredBrand">
          <svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 726.17 141.25">
            <path
              className="a"
              d="M237.48 60.4a34.83 34.83 0 00-10.31-6.58 30.61 30.61 0 00-11.32-2.09q-12.37 0-19.72 7.4T188.78 79q0 12.22 6.82 19.38t18.61 7.17a33.11 33.11 0 0023.16-9l-.1 17a44.15 44.15 0 01-11.08 4.66 47.51 47.51 0 01-12.19 1.52q-18.51 0-30.38-11.5T171.75 79q0-17.66 11.9-29.13t30.67-11.47a55.26 55.26 0 0112.16 1.32 54.2 54.2 0 0111.58 4.07zM300.59 91.92a26.6 26.6 0 01-8.17 19.88q-8.18 7.92-20.7 7.93t-20.84-7.93a26.54 26.54 0 01-8.19-19.88A26.57 26.57 0 01250.94 72q8.25-8 20.78-8t20.72 7.88q8.15 7.93 8.15 20.04zm-15.34-.11q0-6.34-3.7-10.12t-9.94-3.79q-6.24 0-9.89 3.76t-3.64 10.15q0 6.34 3.64 10.15t9.89 3.81a13.25 13.25 0 009.92-3.81q3.72-3.81 3.72-10.15zM321.29 117.67h-15.07V65.8h15.07v8.14a25.57 25.57 0 017.91-7.51 19 19 0 019.54-2.38q6.45 0 10.5 2.65a14.3 14.3 0 015.73 8 25.67 25.67 0 018.17-8 21.14 21.14 0 0119.35-.63 14 14 0 015.95 6.1 18 18 0 011.59 5 55 55 0 01.48 8.51v31.94h-15.07V92q0-9.47-1.93-12.58t-6.75-3.12q-5.81 0-8.43 4.33t-2.62 14.17v22.85h-15.07V92q0-9.15-1.79-12.37t-6.19-3.23q-6 0-8.67 4.37t-2.7 14zM414.22 117.67h-15.07V65.8h15.07v8.14a25.68 25.68 0 017.91-7.51 19 19 0 019.54-2.38q6.45 0 10.5 2.65a14.26 14.26 0 015.74 8 25.64 25.64 0 018.16-8 21.16 21.16 0 0119.36-.63 14 14 0 015.95 6.1 17.66 17.66 0 011.58 5 55 55 0 01.48 8.51v31.94h-15.07V92q0-9.47-1.93-12.58t-6.74-3.12q-5.82 0-8.44 4.33t-2.61 14.17v22.85h-15.07V92q0-9.15-1.8-12.37t-6.19-3.23q-6 0-8.67 4.37t-2.7 14zM507.05 65.8v27.28q0 6.87 2.67 9.83t8.7 3q6 0 8.67-3t2.7-9.81V65.8h15.07v27.28q0 13.69-6.4 20.17t-19.83 6.48q-13.69 0-20.12-6.45t-6.42-20.2V65.8zM553.82 117.67V65.8h14.75v8.14a27.48 27.48 0 018.75-7.48 22.33 22.33 0 0110.39-2.41 22.6 22.6 0 0110.13 2 15.08 15.08 0 016.48 6.21 16.78 16.78 0 011.68 4.93 51.45 51.45 0 01.5 8.54v31.94h-15.08V92q0-9.57-2.23-12.64c-1.48-2-4-3.06-7.61-3.06a12.83 12.83 0 00-5.74 1.29 12 12 0 00-4.36 3.68 11.77 11.77 0 00-2 4.23 31.38 31.38 0 00-.61 7.24v24.91zM614.5 44.49a8.84 8.84 0 018.78-8.78 8.61 8.61 0 016.26 2.56 8.36 8.36 0 012.62 6.22 8.45 8.45 0 01-2.62 6.24 8.6 8.6 0 01-6.26 2.59 8.35 8.35 0 01-6.19-2.65 8.53 8.53 0 01-2.59-6.18zm1.32 73.18V65.8h15v51.87zM642.45 117.67V77.59h-7.25V65.8h7.25V48.56h15.07V65.8h7.24v11.79h-7.24v40.08zM689.89 113.65L669 65.8h17.4l9 23.74a28.14 28.14 0 011.48 5.1 58.44 58.44 0 01.9 6.42c.35-1.9.8-3.84 1.32-5.81s1.19-4.07 2-6.29l7.88-23.16h17.24l-30.88 75.45h-16.71z"
            />
            <g opacity=".8">
              <path
                className="c"
                d="M262.3 50.16V10.83h-11.84V7.16h27.61v3.67H266.2v39.33zM278.88 24.11v13c0 4 .57 6.74 1.69 8.37s3 2.44 5.72 2.44 4.57-.83 5.72-2.47 1.73-4.43 1.73-8.34v-13h3.59V39q0 6.08-2.79 9.21t-8.2 3.12q-5.43 0-8.25-3.12T275.27 39V24.11zM304.25 50.16v-26h3.44v4a10.59 10.59 0 013.89-3.74 10.89 10.89 0 015.3-1.25 9.29 9.29 0 016.9 2.47 9.25 9.25 0 012.47 6.87v17.65h-3.67V34.09q0-3.9-1.63-5.8a6.31 6.31 0 00-5-1.89q-4.14 0-6.09 2.45t-1.95 7.71v13.6zM332.21 14a2.64 2.64 0 01.82-2 2.69 2.69 0 012-.8 2.75 2.75 0 012 .8 2.74 2.74 0 010 3.92 2.76 2.76 0 01-2 .8 2.69 2.69 0 01-2-.8 2.62 2.62 0 01-.82-1.92zm.91 36.21v-26h3.73v25.95zM341 45.52l3.44-2a6.42 6.42 0 006.43 4.38 5.41 5.41 0 003.64-1.16 3.9 3.9 0 001.35-3.1q0-3-5.31-5.08c-.37-.14-.67-.26-.88-.36a16.35 16.35 0 01-5.67-3.3 5.87 5.87 0 01-1.64-4.24 7 7 0 012.35-5.45 8.68 8.68 0 016.07-2.13 10.09 10.09 0 015.41 1.38 8 8 0 013.26 3.94l-3.32 1.85a5.24 5.24 0 00-2.13-2.82 6.1 6.1 0 00-3.52-1 4.42 4.42 0 00-3.1 1.1 3.55 3.55 0 00-1.22 2.74 3.4 3.4 0 001.23 2.73 16.06 16.06 0 005 2.32c2.86 1 4.78 2.08 5.77 3.26a7.32 7.32 0 011.48 4.87 7.11 7.11 0 01-2.55 5.73 10.35 10.35 0 01-6.87 2.14 10.47 10.47 0 01-5.72-1.51 8.55 8.55 0 01-3.5-4.29zM363.59 14a2.78 2.78 0 012.79-2.76 2.76 2.76 0 012 .8 2.76 2.76 0 010 3.92 2.77 2.77 0 01-2 .8 2.72 2.72 0 01-2-.8 2.62 2.62 0 01-.79-1.96zm.91 36.21v-26h3.73v25.95zM394.63 50.16V45.4a9.46 9.46 0 01-9.13 5.9 11.51 11.51 0 01-9-3.84q-3.42-3.85-3.42-10.17a15.14 15.14 0 013.37-10.2 11.79 11.79 0 0114.47-2.5 9.61 9.61 0 013.74 4.27v-4.75h3.61v26.05zm-17.56-12.75q0 5.06 2.28 7.78a8 8 0 006.5 2.74 7.85 7.85 0 006.48-3q2.35-3 2.36-8.21a11.2 11.2 0 00-2.35-7.54 8 8 0 00-6.43-2.74 7.87 7.87 0 00-6.46 2.92c-1.59 1.97-2.38 4.64-2.38 8.05zM405.23 50.16v-26h3.44v4a10.52 10.52 0 013.89-3.74 10.84 10.84 0 015.3-1.25 9.32 9.32 0 016.9 2.47 9.29 9.29 0 012.47 6.87v17.65h-3.67V34.09c0-2.6-.55-4.53-1.63-5.8a6.31 6.31 0 00-5-1.89q-4.14 0-6.1 2.45t-2 7.71v13.6z"
              />
            </g>
            <path
              className="d"
              d="M23.57 100a23.79 23.79 0 006.06 4.89 13 13 0 006.14 1.52q6 0 8.4-3.51c1.61-2.34 2.43-6.69 2.43-13.06V8.48h20.12v87.19q0 14.2-7 20.88t-21.82 6.68a37.37 37.37 0 01-14.8-2.82 39.44 39.44 0 01-12.49-8.78zM81.53 97.89l16.2-6.72a20 20 0 008.44 11.41q6.15 3.93 15.69 3.93 9 0 14.37-4.5A15 15 0 00141.56 90q0-9.86-18.25-17.56c-1.7-.77-3-1.33-3.92-1.68q-20.64-9-27.5-16.3A25.07 25.07 0 0185 36.58a27.23 27.23 0 0110.39-22.14Q105.74 6 122.55 6q13.81 0 23.11 4.78a26.07 26.07 0 0112.87 13.7l-15.86 7.33a25.06 25.06 0 00-8.23-7.71 21.07 21.07 0 00-10.27-2.45q-8.19 0-13 3.82a12.39 12.39 0 00-4.81 10.23q0 10.08 21.14 18.78c1.08.46 1.93.82 2.56 1.07q18.51 7.64 25.41 14.93t6.91 18.21q0 15.88-11.17 25.23T121 123.23q-15.95 0-26.13-6.56a30.57 30.57 0 01-13.34-18.78z"
            />
            <path
              className="e"
              d="M13.94 94.66a23.94 23.94 0 006 4.89 13 13 0 006.14 1.52q6 0 8.4-3.51t2.43-13V3.2h20.18v87.19q0 14.19-7 20.88T28.27 118a37.37 37.37 0 01-14.8-2.83A39.44 39.44 0 011 106.34zM71.9 92.6l16.2-6.72a20 20 0 008.44 11.41q6.15 3.94 15.69 3.94 9 0 14.37-4.51a15 15 0 005.33-12.06q0-9.85-18.25-17.56c-1.7-.76-3-1.32-3.92-1.68q-20.64-9-27.5-16.3a25 25 0 01-6.86-17.83A27.23 27.23 0 0185.76 9.15Q96.11.67 112.91.68q13.82 0 23.09 4.77a26.08 26.08 0 0112.88 13.7L133 26.48a25.06 25.06 0 00-8.23-7.71 21.07 21.07 0 00-10.27-2.44q-8.19 0-13 3.81a12.41 12.41 0 00-4.82 10.24q0 10.08 21.15 18.78l2.56 1.07q18.49 7.64 25.41 14.92t6.91 18.21q0 15.89-11.17 25.23T111.38 118q-15.94 0-26.14-6.57A30.6 30.6 0 0171.9 92.6z"
            />
          </svg>
        </div>
        <div className="socialIconWrapper">
          <a href="https://discord.com/invite/" target="_blank" rel="noopener noreferrer">
            <IconHover
              baseImgSrc={!isLightMode ? discordDarkMode : discordLightMode}
              hoverImgSrc={discordHover}
              altText="Discord"
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <IconHover
              baseImgSrc={!isLightMode ? linkedinDarkMode : linkedinLightMode}
              hoverImgSrc={linkedinHover}
              altText="Discord"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <IconHover
              baseImgSrc={!isLightMode ? twitterDarkMode : twitterLightMode}
              hoverImgSrc={twitterHover}
              altText="Discord"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
