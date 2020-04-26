import React, { Fragment } from 'react';

export const Footer = () => {
  return (
    <Fragment>
      <footer className='footer text-center'>
        <span style={{ fontSize: '130%' }}>
          Visit at:
          <a href='https://www.enactusnsut.org/' style={{ color: '#46b7f5' }}>
            {' '}
            www.enactusnsut.org
          </a>
        </span>
        <div
          className='row'
          style={{ margin: '0.5rem 0', justifyContent: 'center' }}
        >
          <div className='col-1'>
            <a href='enactusnsit@gmail.com'>
              <i
                className='fab fa-google-plus fa-2x'
                style={{ color: '#db4a39' }}
              ></i>
            </a>
          </div>
          <div className='col-1'>
            <a href='https://www.facebook.com/EnactusNSUT'>
              <i
                className='fab fa-facebook fa-2x'
                style={{ color: '#1E4D9D' }}
              ></i>
            </a>
          </div>
          <div className='col-1'>
            <a href='https://www.instagram.com/enactusnsut'>
              <i className='fab fa-instagram fa-2x nikhil'></i>
            </a>
          </div>
          <div className='col-1'>
            <a href='https://www.linkedin.com/company/enactus-nsut'>
              <i
                className='fab fa-linkedin fa-2x'
                style={{ color: '#0073B0' }}
              ></i>
            </a>
          </div>
        </div>
        <br />
        <span style={{ fontSize: '120%' }}>Made with love by Enactus NSUT</span>
        <br></br>
        Disclamer: The data contained in this website is intended for general
        reference only and is meant for viewers in India only.
      </footer>
    </Fragment>
  );
};
