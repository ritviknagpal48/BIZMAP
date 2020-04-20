import React, { Fragment } from 'react';

export const DiscussionForum = () => {
  return (
    <Fragment>
      <div className='col-lg-8 col-xl-6'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Recent Chats</h4>
            <div
              className='chat-box scrollable position-relative ps-container ps-theme-default ps-active-y'
              style={{ height: '475px' }}
              data-ps-id='1eff0be2-6d10-f91a-6f39-efe77a9cfa1a'
            >
              {/*chat Row */}
              <ul className='chat-list'>
                {/*chat Row */}
                <li className='chat-item'>
                  <div className='chat-img'>
                    <img
                      src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/1.jpg'
                      alt='user'
                    />
                  </div>
                  <div className='chat-content'>
                    <h6 className='font-medium'>James Anderson</h6>
                    <div className='box bg-light-info'>
                      Lorem Ipsum is simply dummy text of the printing &amp;
                      type setting industry.
                    </div>
                  </div>
                  <div className='chat-time'>10:56 am</div>
                </li>
                {/*chat Row */}
                <li className='chat-item'>
                  <div className='chat-img'>
                    <img
                      src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/2.jpg'
                      alt='user'
                    />
                  </div>
                  <div className='chat-content'>
                    <h6 className='font-medium'>Bianca Doe</h6>
                    <div className='box bg-light-info'>
                      It’s Great opportunity to work.
                    </div>
                  </div>
                  <div className='chat-time'>10:57 am</div>
                </li>
                {/*chat Row */}
                <li className='odd chat-item'>
                  <div className='chat-content'>
                    <div className='box bg-light-inverse'>
                      I would love to join the team.
                    </div>
                    <br />
                  </div>
                </li>
                {/*chat Row */}
                <li className='odd chat-item'>
                  <div className='chat-content'>
                    <div className='box bg-light-inverse'>
                      Whats budget of the new project.
                    </div>
                    <br />
                  </div>
                  <div className='chat-time'>10:59 am</div>
                </li>
                {/*chat Row */}
                <li className='chat-item'>
                  <div className='chat-img'>
                    <img
                      src='./Xtreme admin Template - The Ultimate Multipurpose admin template_files/3.jpg'
                      alt='user'
                    />
                  </div>
                  <div className='chat-content'>
                    <h6 className='font-medium'>Angelina Rhodes</h6>
                    <div className='box bg-light-info'>
                      Well we have good budget for the project
                    </div>
                  </div>
                  <div className='chat-time'>11:00 am</div>
                </li>
                {/*chat Row */}
                {/* <div id="someDiv"></div> */}
              </ul>
              <div
                className='ps-scrollbar-x-rail'
                style={{ left: '0px', bottom: '0px' }}
              >
                <div
                  className='ps-scrollbar-x'
                  tabIndex={0}
                  style={{ left: '0px', width: '0px' }}
                />
              </div>
              <div
                className='ps-scrollbar-y-rail'
                style={{ top: '0px', right: '3px', height: '475px' }}
              >
                <div
                  className='ps-scrollbar-y'
                  tabIndex={0}
                  style={{ top: '0px', height: '427px' }}
                />
              </div>
            </div>
          </div>
          <div className='card-body border-top'>
            <div className='row'>
              <div className='col-9'>
                <div className='input-field mt-0 mb-0'>
                  <input
                    type='text'
                    id='textarea1'
                    placeholder='Type and enter'
                    className='form-control border-0'
                  />
                </div>
              </div>
              <div className='col-3'>
                <a
                  className='btn-circle btn-lg btn-cyan float-right text-white'
                  href='javascript:void(0)'
                >
                  <i className='fas fa-paper-plane' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
