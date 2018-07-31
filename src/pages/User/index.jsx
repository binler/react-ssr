import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUser} from "./user.actions";

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
    this.props.getData();
  }

  render() {
    return (
      <h1>This is user page</h1>
    )
  }
}

export default User;