import React, { Fragment, useState } from "react";
import { Link } from 'gatsby';
import { CopyToClipboard } from "react-copy-to-clipboard";
import '../Common/Styles.scss';
import IconHover from '../Common/IconHover';
const star = require('../Common/images/star.svg');

const copyLightMode = require('../Common/images/copy-light-mode.svg');

const copyHover = require('../Common/images/copy-hover.svg');

const lightBackArrow = require('../Common/images/back-arrow-light.svg');

const darkBackArrow = require('../Common/images/back-arrow-dark.svg');

const IndivTalksPage = props => {
  const [isCopied, setIsCopiedToggle] = useState(false);
  const onCopy = () => {
    setIsCopiedToggle(true);
    setTimeout(() => setIsCopiedToggle(false), 3000);
  };

  const renderCopyIcon = () => {
    if (isCopied) {
      return (
        <div className={'copiedWrapper ' + ((!props.isLightMode) ? 'copiedDarkMode' : 'copiedLightMode')}>Copied</div>
      );
    }
    return null;
  };
  return (
    <Fragment>
      <div className='detailsPageWrapper sectionWrapper removePaddTop'>
        <div className='articleDesc fontBold'>
          {
            props.currentDetailsPage.speakersList ? (
              <Fragment>
                {
                  props.currentDetailsPage.speakersList.map((name, index) => {
                    return (
                      <Fragment key={index}>
                        {name.speakersName}
                        {index < (props.currentDetailsPage.speakersList.length - 1) ? ', ' : ''}
                      </Fragment>
                    )
                  })
                }
              </Fragment>
            ) : null
          }
        </div>
        {
          props.currentDetailsPage.title ? (
            <div className='articleSubTitle'>
              {props.currentDetailsPage.title}
            </div>
          ) : null
        }
        {
          props.currentDetailsPage.description ? (
            <Fragment>
              {
                props.currentDetailsPage.description.map((desc, index) => {
                  return (
                    <div key={index} className='articleDesc pb-40'>
                      {
                        desc.desc ? (
                          desc.desc
                        ) : null
                      }
                      {
                        desc.list ? (
                          <ul>
                            {
                              desc.list.map((list, subIndex) => {
                                return (
                                  <li key={subIndex}>
                                    <img src={star} alt='star' />
                                    {list}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        ) : null
                      }
                    </div>
                  )
                })
              }
            </Fragment>
          ) : null
        }
        {
          props.currentDetailsPage.takeaways ? (
            <Fragment>
              <div className='articleSectionTitle fontBold'>
                Talk Takeaways
              </div>
              {
                props.currentDetailsPage.takeaways.map((desc, index) => {
                  return (
                    <div key={index} className='articleDesc pb-40'>
                      {
                        desc.desc ? (
                          desc.desc
                        ) : null
                      }
                      {
                        desc.list ? (
                          <ul>
                            {
                              desc.list.map((list, subIndex) => {
                                return (
                                  <li key={subIndex}>
                                    <img src={star} alt='star' />
                                    {list}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        ) : null
                      }
                    </div>
                  )
                })
              }
            </Fragment>
          ) : null
        }
        {
          props.currentDetailsPage.contents ? (
            <Fragment>
              {
                props.currentDetailsPage.contents.map((desc, index) => {
                  return (
                    <Fragment key={index}>
                      {
                        desc.title ? (
                          <div className='articleSectionTitle fontBold'>
                            {desc.title}
                          </div>
                        ) : null
                      }
                      <div key={index} className='articleDesc pb-40'>
                        {
                          desc.desc ? (
                            desc.desc
                          ) : null
                        }
                        {
                          desc.list ? (
                            <ul>
                              {
                                desc.list.map((list, subIndex) => {
                                  return (
                                    <li key={subIndex}>
                                      <img src={star} alt='star' />
                                      {list}
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          ) : null
                        }
                      </div>
                    </Fragment>
                  )
                })
              }
            </Fragment>
          ) : null
        }
        {
          props.currentDetailsPage.speakersTitle ? (
            <div className='articleSectionTitle fontBold'>
              {props.currentDetailsPage.speakersTitle}
            </div>
          ) : null
        }
        {
          props.currentDetailsPage.speakersList ? (
            <Fragment>
              {
                props.currentDetailsPage.speakersList.map((speakers, index) => {
                  return (
                    <div key={index} className='speakerDetails'>
                      <div className='speakersProfile'>
                        <div className='speakersImg'>
                          <img src={speakers.speakersImg} alt={speakers.speakersName} />
                        </div>
                        <div className='pl-40'>
                          <div className='commonLink'>
                            {speakers.speakersName}
                          </div>
                          <div className='articleDesc fontBold'>
                            {speakers.speakerJob}
                          </div>
                          {
                            speakers.speakersBio ? (
                              <div className='articleDesc'>
                                {speakers.speakersBio}
                              </div>
                            ) : null
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Fragment>
          ) : null
        }
        <div className='shareWrapper'>
          <div className='articleDesc fontBold'>
            {props.currentDetailsPage.isWorkshop ? 'Share this workshop' : 'Share this talk'}
          </div>
          <div className='shareIconWrapper'>
            <CopyToClipboard text={`https://summit.js-community.tn${props.currentDetailsPage.url}`} onCopy={onCopy}>
              <div className='shareIcon'>
                <IconHover
                  baseImgSrc={copyLightMode}
                  hoverImgSrc={copyHover}
                  altText='Discord'
                />
                {renderCopyIcon()}
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className='backBtnWrapper'>
          <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
          <Link to={props.currentDetailsPage.backLink}>
            <button className='commonBtn darkBtn'>
              <img className='submitIcon mart-4' src={lightBackArrow} alt='Arrow' />
              <img className='submitIconHover mart-4' src={darkBackArrow} alt='Arrow' />
              {props.currentDetailsPage.isWorkshop ? 'Back to Workshop' : 'Back to Talks'}
            </button>
          </Link>
        </div>
      </div>
      {/*
      <div className='buttonWrapper btnFixedPos'>
        <Link to='/register/'><button className='commonBtn darkBtn'>Register Now</button></Link>
      </div>
      */}
    </Fragment>
  );
};

export default IndivTalksPage;
