import React from 'react';

import { AddTask } from './AddTask';

export const ControlLine = () => (
  <div style={{
    textAlign: 'right',
    paddingRight: '20px',
  }}
  >
    <AddTask />
  </div>
);

export default ControlLine;
