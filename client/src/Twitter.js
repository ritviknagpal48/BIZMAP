import React, { Fragment } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Twitter = () => {
  return (
    <Fragment>
      <div className='col-md-6 col-xs-12'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='WHO'
          options={{ height: 600 }}
        />
      </div>
      <div className='col-md-6 col-xs-12'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='saurabhnemade'
          options={{ height: 600 }}
        />
      </div>
    </Fragment>
  );
};
