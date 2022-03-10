import React from 'react';
import { Task } from './Task.jsx';

export const App = () => (
  <div>
    <h1>Simple Todo App</h1>
    <ul>
      { tasks.map(task => <Task key={task._id} task={task}/>)}
    </ul>
  </div>
);

const tasks = [
  {_id: 1, text: 'Stretching'},
  {_id: 2, text: 'Pick up the Bike'},
  {_id: 3, text: 'Ride!'},
];
