import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import './App.css';
import indexRoutes from 'routes/index.jsx';
import { ToastProvider } from 'react-toast-notifications';
import ErrorBoundary from 'components/ErrorBoundaries/ErrorBoundaries.jsx';
import { history } from '../_helpers';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from './LoginPage';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App did mount ??');
    // const { dispatch } = this.props;
    const arr = [];
    const date = new Date();
    const month =
      date.getMonth() + 1 < 10
        ? `0${(date.getMonth() + 1).toString()}`
        : (date.getMonth() + 1).toString();
    const day =
      date.getDate() < 10
        ? `0${date.getDate().toString()}`
        : date.getDate().toString();
   
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <ToastProvider placement="bottom-right">
            <div>
              <div>
                <Router history={history}>
                  <Switch>
                    <Route path="/login" component={LoginPage} />
                    {indexRoutes.map((prop, key) => (
                      // console.log(prop);
                      <PrivateRoute
                        path={prop.path}
                        component={prop.component}
                        key={key}
                      />
                    ))}
                  </Switch>
                </Router>
              </div>
            </div>
          </ToastProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // alert: PropTypes.object.isRequired,
  // mailBox: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  const { alert, mailBox } = state;
  return {
    alert,
    mailBox,
  };
}

// const connectedApp = connect()(App);
export { App };
