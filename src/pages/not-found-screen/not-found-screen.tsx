import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element{
  return(
    <React.Fragment>
      <h1> 404 Not Found</h1>
      <Link to='/'>Back to main page</Link>
    </React.Fragment>
  );
}

export default NotFoundScreen;
