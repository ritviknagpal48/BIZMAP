import React, { Fragment } from 'react';

export const Message = content => {
  console.log(content);
  return (
    <Fragment>
      <li className='chat-item'>
        <div className='chat-img'></div>
        <div className='chat-content'>
          <div className='box bg-light-info'>{content.content.content}</div>
        </div>
        <div className='chat-time'>10:56 am</div>
      </li>
    </Fragment>
  );
};
