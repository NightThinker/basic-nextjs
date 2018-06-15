import React from 'react';

import User from '../../components/User';

const authindexPages = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="May" age={22} />
  </div>
);

authindexPages.getInitialProps = (context) => {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({appName: 'Super App (Auth)'});
    }, 1000);
  });
  return promise;
};

export default authindexPages;