import React, { Fragment } from 'react';
import Moment from 'react-moment';

export const Message = content => {
  // console.log(content);
  return (
    <Fragment>
      <li className='chat-item'>
        <div className='chat-img'></div>
        <div className='chat-content'>
          <div className='box bg-light-info'>{content.content.content}</div>
        </div>

        <div className='chat-time'>
          <span>{content.content.Date.split('G')[0] + ' '} </span>{' '}
        </div>
      </li>
    </Fragment>
  );
};
