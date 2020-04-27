import React, { Fragment, useEffect, useState } from 'react';
import { Message } from './Message';
import axios from 'axios';
import { EmailSend } from './EmailSend';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

export const DiscussionForum = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const onOpenModal = () => {
    setOpen(true);
  };
  const changeName = e => {
    e.preventDefault();
    setName(e.target.value);
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
  const [show, setShow] = useState(false);

  const fetchMessages = async () => {
    const res = await axios.post(
      'https://covidbizmap.enactusnsut.org/bizmap/get_messages'
    );
    console.log(res.data.messages);
    setMessages(res.data.messages);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [incomplete, setIncomplete] = useState(false);
  const postMessage = async () => {
    if (name.split(' ').join('') == '' || message.split(' ').join('') == '') {
      setIncomplete(true);
      setTimeout(() => {
        setIncomplete(false);
      }, 5000);
    } else {
      const res = await axios.post(
        'https://covidbizmap.enactusnsut.org/bizmap/add_message',
        {
          name: name,
          content: message
        }
      );
      window.location.reload(false);
    }
  };
  const onSubmit = e => {
    console.log('submit');
    postMessage();
  };

  const onClick = async e => {
    e.preventDefault();
    handleShow();
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
      {/* <EmailSend></EmailSend> */}
      <Fragment>
        {/* <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your Name</Modal.Title>
          </Modal.Header>
          {incomplete && (
            <Alert variant='danger'>
              Please, fill all the fields in the form
            </Alert>
          )}
          <div style={{ padding: '5%', textAlign: 'center' }}>
            <input
              style={{
                paddingLeft: '5%',
                paddingRight: '5%',
                borderRadius: '5px'
              }}
              onChange={changeName}
              value={name}
              placeholder='Enter your Name here'
            ></input>
          </div>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button
              variant=''
              onClick={onSubmit}
              style={{ backgroundColor: '#46B7F5', color: 'white' }}
            >
              Submit for Review
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </Fragment>
  );
};
