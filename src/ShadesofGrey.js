import React from 'react';
import Square from './Square';

function ShadesOfGrey (props) {
  const greyValues = Array.from(
    {length: 9},
    function (val, index) {
      return Math.round(253/8 * index) + 1
    }
  );

  const style = {
    display: 'flex',
    flexDirection: 'row-reverse'
  }

  return <div style={style} className="shades-of-grey">
    {
      greyValues.map(
        function (value) { return <Square color={grey(value)} /> }
      )
    }
  </div>
}

function grey(value) {
  return `rgb(${value},${value},${value})`
}

export default ShadesOfGrey;
