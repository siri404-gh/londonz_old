import React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import AirbrakeClient from 'airbrake-js';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.initialiseAirbrake();
    this.initialiseLogRocket();
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    this.sendAirbrakeError(error, info);
  }
  initialiseLogRocket() {
    LogRocket.init(process.env.LOGROCKET_ID);
    LogRocket.identify('1', {
      name: 'Sreeram Padmanabhan',
      email: 'sreeram.com@gmail.com',
    });
    setupLogRocketReact(LogRocket);
  }
  initialiseAirbrake() {
    this.airbrake = new AirbrakeClient({
      projectId: process.env.AIRBRAKE_ID,
      projectKey: process.env.AIRBRAKE_PROJECT_KEY,
    });
  }
  sendAirbrakeError(error, info) {
    this.airbrake.notify({
      error: error,
      params: { info: info },
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
