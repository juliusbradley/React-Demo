import React from 'react';

function Square (props) {
 const { color = 'Blue' } = props;
   //const color = props.color !== undefined ?props.color: 'Blue';

  const style = {
  height: '50px',
  width: '50px',
  backgroundColor: color
  }
    return <div style={style} className="square"></div>
}

export function BlueSquare (props) {
  //using {...props} inside a JSX element will pass all the properties of props
  //as props of that element
  return <Square color="blue" {...props} />
}

export default Square;
