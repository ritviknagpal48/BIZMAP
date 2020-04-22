import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button'

export const ActiveCases = (props) => {
  const {cases,deaths,recovered,active} = props.data;
  return (
    <Fragment>
      <div className='col-lg-4 col-xl-6'>
        <div className='card card-hover'>
          <div
            className='card-body'
            style={{
              background:
                'url(../../assets/images/background/active-bg.png) no-repeat top center'
            }}
          >
            <div className='pt-3 text-center'>
          <span className='display-4 d-block font-medium' style={{}}><strong>{cases}</strong> </span>
              <span>Cases</span>
              {/* Progress */}
              <div className='progress mt-5' style={{ height: '4px' }}>
                <div
                  className='progress-bar bg-info'
                  role='progressbar'
                  style={{ width: `${recovered/(recovered+deaths+active)*100}%`}}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className='progress-bar bg-danger'
                  role='progressbar'
                  style={{ width: `${active/(recovered+deaths+active)*100}%` }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
                <div
                  className='progress-bar bg-warning'
                  role='progressbar'
                  style={{ width: `${deaths/(recovered+deaths+active)*100}%` }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              {/* Progress */}
              {/* row */}
              <div className='row mt-4 mb-3'>
                {/* column */}
                <div className='col-4 border-right text-left'>
          <h3 className='mb-0 font-medium'>{active}</h3>Active Cases
                </div>
                {/* column */}
                <div className='col-4 border-right'>
          <h3 className='mb-0 font-medium'>{deaths}</h3>Deaths
                </div>
                {/* column */}
                <div className='col-4 text-right'>
          <h3 className='mb-0 font-medium'>{recovered}</h3>Recovered
                </div>
              </div>
              <a
                href='javascript:void(0)'
                className='waves-effect waves-light mt-3 btn btn-lg btn-info accent-4 mb-3'
              >
                View More Details
              </a>
            </div>
          </div>
        </div>
        <div className='card  card-hover'>
          <div className='card-body' style={{textAlign:"center"}}>
            <a href="https://pmnrf.gov.in/en/" target="_blank"><Button as="input" type="submit" value="PM Relief Care Fund" style={{backgroundColor:"blue"}} /></a>{' '}
            <br/><br/>
            <a href="https://www.mohfw.gov.in/" target="_blank"><Button as="input" type="submit" value="Helpline Support" style={{backgroundColor:"blue"}} /></a>{' '}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
