import React from 'react';
import cond from 'ramda/src/cond';
import T from 'ramda/src/T';

const trailing0 = val => val < 10 ? `0${val}` : val;
const formatCountdown = (current, start) => {
  let rest = Math.round((start - current) / 1000);
  const hours = Math.floor(rest / (60 * 60));
  rest = rest % (60 * 60);
  const minutes = Math.floor(rest / 60);
  rest = rest % 60;
  return `${trailing0(hours)}:${trailing0(minutes)}:${trailing0(rest)}`;
};
const miliSecondsOf24Hours = 60 * 60 * 24 * 1000;
const isToEarly = ({ current, start }) => start - current >= miliSecondsOf24Hours;
const isToLate = ({ current, start }) => start - current <= 0;

const ToEarly = () => <div>Countdown will start soon.</div>
const ToLate = () => <div>Countdown is already over.</div>
const Countdown = ({ current, start }) => <div>{formatCountdown(current, start)}</div>;

export default cond([
  [isToEarly, ToEarly],
  [isToLate, ToLate],
  [T, Countdown],
]);
