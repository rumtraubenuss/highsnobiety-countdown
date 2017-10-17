import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';

import Countdown from '../src/index';

storiesOf('Set countdownToTime to', module)
  .add('Now + 24 hours + 5 sec', () => (
    <Countdown countdownToTime={moment().add(24, 'hours').add(5, 'seconds').valueOf()} />
  ))
  .add('Now + 10 hours', () => (
    <Countdown countdownToTime={moment().add(10, 'hours').valueOf()} />
  ))
  .add('Now + 30 minutes', () => (
    <Countdown countdownToTime={moment().add(30, 'minutes').valueOf()} />
  ))
  .add('Now + 10 sec', () => (
    <Countdown countdownToTime={moment().add(10, 'seconds').valueOf()} />
  ))
  .add('Now - 1 minute', () => (
    <Countdown countdownToTime={moment().subtract(1, 'minutes').valueOf()} />
  ))
