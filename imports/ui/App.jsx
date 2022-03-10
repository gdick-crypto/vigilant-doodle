import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);

const tasks = [
  {_id: 1, text: 'Stretching'},
  {_id: 2, text: 'Pick up the Bike'},
  {_id: 3, text: 'Ride!'},
];
