import React from 'react'

import Square from './Square';

function GridRow ({cols, offset = 0, oddColor = 'White', evenColor = 'DarkBlue'}) {
  const styles = {
    display: 'flex',
    flexFlow: 'row'
  };

  return <div style={styles}>
    {
      Array.from(
        { length: cols },
        (val, index) =>
          <Square
            key={index}
            color={ (index + offset) % 2 === 0 ? oddColor : evenColor } />
      )
    }
  </div>
}

function GridBoard(props) {
  const {
    cols = 8,
    rows = 8,
    oddColor = 'White',
    evenColor = 'DarkBlue',
    isBordered = false
  } = props

  const styles = {
    display: 'flex',
    flexFlow: 'column',
    boxSizing: 'border-box'
  };

  if (isBordered) {
    styles.border = '20px solid brown';
  }

  return <div style={ styles }>
    {
      Array.from({ length: rows }, function(val, index) {
        return (
          <GridRow
            key={ index }
            cols={ cols }
            offset={ index % 2 }
            oddColor={ oddColor }
            evenColor={ evenColor } />
        )
      })
    }
  </div>
}

export default GridBoard
