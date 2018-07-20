import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.button}>This is home page</h1>
        <h2>HAHAHAH</h2>
        <Link to={'/user'}>User</Link>
      </div>
    )
  }
}

export default Home;