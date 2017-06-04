import React from 'react';

class Shape extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    };

    this.cycleColor = this.cycleColor.bind(this);
  }

  cycleColor () {
    const colorIndex = this.state.colorIndex;

    this.setState({colorIndex: (colorIndex + 1) % this.props.colors.length});
  }

  render() {
    const { color, type = 'Square', colors } = this.props;
    // ð syntax sugar for ð
    // const color = props.color !== undefined ? props.color : 'Blue';
    const { colorIndex } = this.state;

    const style = {
      height: '150px',
      width: '150px',
      backgroundColor: color || colors[colorIndex],
      borderRadius: type === 'Circle' ? '9999999px' : '0px'
    }
    return <div onClick={this.cycleColor} style={style} className="shape"></div>
  }
}

// defaultProps is property of all components
// it can be set to a plain javascript object where
// each property value pair can act as a default for props of
// the same
Shape.defaultProps = {
  colors: ['Magenta', 'Yellow', 'Cyan']
};
// âï¸ the above would set the array ['Magenta', 'Yellow', 'Cyan'] as
// the default for the `colors` if it is not given

export default Shape;
