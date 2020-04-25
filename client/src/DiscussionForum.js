import React, { Fragment, useEffect, useState } from 'react';
import { Message } from './Message';
import axios from 'axios';

export const DiscussionForum = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const fetchMessages = async () => {
    const res = await axios.post(
      'https://covidbizmap.enactusnsut.org/bizmap/get_messages'
    );
    console.log(res.data.messages);
    setMessages(res.data.messages);
  };

  const onClick = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://covidbizmap.enactusnsut.org/bizmap/add_message',
      {
        content: message
      }
    );
    // console.log(res.data);
    window.location.reload(false);
  };
  const onChange = e => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <Fragment>
      <div className='col-lg-8 col-xl-6'>
        <div className='card'>
          <div className='card-body'>
            <h4
              className='page-title'
              style={{
                fontSize: '1.8rem',
                marginTop: '20px',
                textAlign: 'center'
              }}
            >
              Discussion Forum
            </h4>
            <div
              className='chat-box scrollable position-relative ps-container ps-theme-default ps-active-y'
              style={{ height: '475px' }}
              data-ps-id='1eff0be2-6d10-f91a-6f39-efe77a9cfa1a'
            >
              {/*chat Row */}
              <ul className='chat-list'>
                {/*chat Row */}
                {messages.length > 0 &&
                  messages.map(content => {
                    return <Message content={content}></Message>;
                  })}

                {/*chat Row */}

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
                    value={message}
                    onChange={onChange}
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
                  onClick={onClick}
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
