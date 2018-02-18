import React, {Component} from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './App';
import {logout} from './Auth.redux';
const Group2 = () => <h2>二營</h2>;
const Group3 = () => <h2>独立团</h2>;

@connect (state => state.auth, {logout})
class Dashboard extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    const redirect = <Redirect to="/login" />;
    const app = (
      <div>
        <ul>
          <li>
            <Link to="/dashboard/">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/group2">二營</Link>
          </li>
          <li>
            <Link to="/dashboard/group3">独立团</Link>
          </li>
        </ul>
        <button onClick={this.props.logout}>注销</button>
        <Route path="/dashboard/" component={App} exact />
        <Route path="/dashboard/group2" component={Group2} />
        <Route path="/dashboard/group3" component={Group3} />
      </div>
    );
    return this.props.isAuth ? app : redirect;
  }
}
export default Dashboard;
