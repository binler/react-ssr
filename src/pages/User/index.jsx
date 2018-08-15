import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUser} from "./user.actions";

import {Helmet} from 'react-helmet';
import Home from "../Home";

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  getData: bindActionCreators(getUser, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class User extends React.Component {

  componentDidMount() {
    this.props.getData(+this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.user.data && Array.isArray(this.props.user.data.results) ? this.props.user.data.results[0].email : null}</title>
          <meta name="og:title" content={this.props.user.data && Array.isArray(this.props.user.data.results) ? this.props.user.data.results[0].phone : null}/>
        </Helmet>
        <h1>This is user page</h1>
        <Home/>
      </div>
    )
  }
}

export default User;