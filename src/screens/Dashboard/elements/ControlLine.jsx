import React from 'react';

import { AddTask } from './AddTask';

import { SearchBar } from './SearchBar';

export const ControlLine = () => (
  <div style={{
    textAlign: 'right',
    paddingRight: '20px',
  }}
  >
    <AddTask />
    <SearchBar />
  </div>
);

export default ControlLine;
