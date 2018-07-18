import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is home page</h1>
        <h2>HAHAHAH</h2>
        <Link to={'/user'}>User</Link>
      </div>
    )
  }
}

export default Home;