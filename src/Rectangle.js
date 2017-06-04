import React from 'react';
//using braces when import is used to access exports
//that are not default
import {BlueSquare} from './Square';

function Rectangle (props) {
  const style = {
  display: 'flex',
  width: `${50*3+10*5}px`,
  height: `${50 + 10 * 2}px`,
  flexDirect: 'row',
  backgroundColor: 'Orange',
  justifyContent: 'space-around',
  alignItems: 'center'

  }
    return <div style={style} className="rectangle">
    <BlueSquare />
    <BlueSquare />
    <BlueSquare />
    </div>
}

export default Rectangle;
