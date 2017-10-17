import React, { PureComponent } from 'react';
import { number, string, oneOfType } from 'prop-types';

import Display from './display';

const getTimestamp = () => parseInt((new Date()).getTime());

class Countdown extends PureComponent {
  static propTypes = {
    countdownToTime: oneOfType([number, string]).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      interval: undefined,
      current: getTimestamp(),
      start: parseInt(this.props.countdownToTime),
    }
  }

  componentDidMount() {
    const interval = window.setInterval(this.handleTick, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.interval);
    this.setState({ interval: undefined });
  }

  handleTick = () => {
    this.setState({ current: getTimestamp() });
  }

  render() {
    const { start, current } = this.state;
    return <Display {...{ start, current }} />
  }
}

export default Countdown;
