/* eslint-disable max-len */
import React from 'react';
import { useRecord } from '../../hooks/useRecord.js';

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input role="color-picker" type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div role="display" style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
