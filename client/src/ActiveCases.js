import React, { Fragment } from 'react';

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
                  style={{ width: `${recovered/(recovered+deaths+active)*100}%` }}
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
          <div className='card-body'>
            <h4 className='card-title'>Bounce Rate</h4>
            <div className='d-flex no-block align-items-center mt-4'>
              <div className>
                <h3 className='font-medium mb-0'>56.33%</h3>
                <span className>Total Bounce</span>
              </div>
              <div className='ml-auto'>
                <div
                  style={{ maxWidth: '150px', height: '60px' }}
                  className='mb-5'
                >
                  <div
                    className='chartjs-size-monitor'
                    style={{
                      position: 'absolute',
                      left: '0px',
                      top: '0px',
                      right: '0px',
                      bottom: '0px',
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      visibility: 'hidden',
                      zIndex: -1
                    }}
                  >
                    <div
                      className='chartjs-size-monitor-expand'
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        zIndex: -1
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          width: '1000000px',
                          height: '1000000px',
                          left: 0,
                          top: 0
                        }}
                      />
                    </div>
                    <div
                      className='chartjs-size-monitor-shrink'
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        zIndex: -1
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          width: '200%',
                          height: '200%',
                          left: 0,
                          top: 0
                        }}
                      />
                    </div>
                  </div>
                  <canvas
                    id='bouncerate'
                    width={150}
                    height={75}
                    className='chartjs-render-monitor'
                    style={{ display: 'block', width: '150px', height: '75px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
