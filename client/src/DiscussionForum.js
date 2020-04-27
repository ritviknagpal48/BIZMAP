import React, { Fragment, useEffect, useState } from 'react';
import { Message } from './Message';
import axios from 'axios';
import ReactModal from 'react-responsive-modal';

export const DiscussionForum = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };

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
    onOpenModal();
    // e.preventDefault();
    // const res = await axios.post(
    //   'https://covidbizmap.enactusnsut.org/bizmap/add_message',
    //   {
    //     content: message
    //   }
    // );
    // // console.log(res.data);
    // window.location.reload(false);
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
        <div className='card' style={{ borderRadius: '10px' }}>
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
      <ReactModal
        open={open}
        styles={{ top: '30vh' }}
        center={true}
        showCloseIcon={false}
        onClose={onCloseModal}
        closeOnOverlayClick={true}
      >
        <div className='post-project'>
          <h3>SHARE</h3>
          <div
            className='post-project-fields'
            style={{ paddingLeft: '0px', paddingRight: '0px' }}
          >
            <form>
              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <input
                    value={'unnown.social' + window.location.pathname}
                    id='textinput'
                    style={{
                      fontWeight: '600',
                      color: '#ED3A4E',
                      fontSize: '1.2rem',
                      textAlign: 'center'
                    }}
                  ></input>
                </div>
                <div className='col-lg-12 text-right'>
                  <i
                    class='fas fa-copy fa-2x'
                    color='#ED3A4E'
                    onClick={onClick}
                  ></i>
                </div>
                <div class='col-lg-12' style={{ textAlign: 'center' }}>
                  <span>
                    <a
                      href={
                        'whatsapp://send?text=Hey, You are invited to write a message or upload a memory, Anonymously to ' +
                        window.location.pathname +
                        ' at https://unnown.social' +
                        window.location.pathname
                      }
                      data-action='share/whatsapp/share'
                    >
                      <i
                        class='fab fa-2x fa-whatsapp'
                        style={{ color: '#62D467' }}
                      ></i>
                    </a>
                  </span>

                  <span>
                    <iframe
                      src='https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2Fritviknagpal48&layout=button&size=large&appId=2250494815263616&width=88&height=28'
                      width={88}
                      height={28}
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling='no'
                      frameBorder={0}
                      allowTransparency='true'
                      allow='encrypted-media'
                    />
                  </span>
                </div>

                <div className='col-lg-12'>
                  <ul>
                    <li>
                      <button
                        className='active'
                        onClick={onCloseModal}
                        type='submit'
                        value='post'
                      >
                        Done
                      </button>
                    </li>
                    <li>
                      <a onClick={onCloseModal} title>
                        Cancel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
    </Fragment>
  );
};
