import React, {Component} from 'react';

function Shape(props) {
  const { color, type } = props

  return <div
    style={{
      backgroundColor: color,
      height: '50px',
      width: '50px',
      borderRadius: type === 'circle' ? '999999px' : '0px'
    }}>
  </div>;
}

function ShapeContainer({shapes = []}) {
  return (
    <div>
      {
        shapes.map((shape, i) => <Shape key={i} {...shape} />)
      }
    </div>
  )
}

export default class ShapeMaker extends Component {
  constructor(props) {
    super(props)

    this.state = {shapes: []}

    this.addShape = this.addShape.bind(this);
  }

  addShape(event) {
    event.preventDefault();

    this.setState({
      shapes: this.state.shapes.concat({
        type: this.refs.type.value || 'circle',
        color: this.refs.color.value || 'Green'
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addShape}>
          <h1>Shape Form</h1>
          <div>
            <label>Type</label>
            <select ref="type">
              <option value="circle">Circle</option>
              <option value="square">Square</option>
            </select>
          </div>
          <div>
            <label>Color</label>
            <input type="text" ref="color"/>
          </div>
          <input type="submit" value="Submit"/>
        </form>

        <h1>Shape Holder</h1>
        <ShapeContainer shapes={this.state.shapes} />
      </div>
    )
  }
}
