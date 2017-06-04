import React, {Component} from 'react';

 export function Shape (props) {
   const {color = 'Aquamarine', type = 'Circle', left, bottom, onClick = () => {}} = props;

   const style = {
     backgroundColor: color,
     borderRadius: type === 'Circle' ? '999999px' : '0px',
     height: '20px',
     width: '20px',
   };

   if (left !== undefined || bottom !== undefined) {
     // Object.assign will merge all the properties of the second argument
     // into the first argument (e.g. style object will receive the left, bottom
     // and position properties)
     Object.assign(style, {
       left, bottom, position: 'absolute'
     })
   }

   return <div
     onClick={onClick}
     className='Shape'
     style={style}></div>
 }

 export function ShapeArena ({x = 0, y = 0, onShapeClick = () => {}}) {
   const style = {
     height: '400px',
     width: '600px',
     border: 'thick solid Salmon',
     position: 'relative'
   };
 
   return (
     <div className='ShapeArena' style={style}>
       <Shape left={x} bottom={y} onClick={onShapeClick}/>
     </div>
   )
 }
 
 export default class ShapeMover extends Component {
   constructor (props) {
     super(props);
 
     this.state = {
       x: 0, y: 0
     };
 
     this.moveShape = this.moveShape.bind(this);
     this.resetPosition = this.resetPosition.bind(this);
   }
 
   moveShape (event) {
     const {target} = event;
     const {x, y} = this.state;

     switch (target.name) {
       case 'left': return this.setState({x: x - 5})
       case 'up': return this.setState({y: y + 5})
       case 'down': return this.setState({y: y - 5})
       case 'right': return this.setState({x: x + 5})
     }
   }

   resetPosition (event) {
     this.setState({x: 0, y: 0});
   }

   render () {
     return (
       <div className='ShapeMover'>
         <h2>Shape Mover</h2>

         <button name='left' onClick={this.moveShape}>Left</button>
         <button name='up' onClick={this.moveShape}>Up</button>
         <button name='down' onClick={this.moveShape}>Down</button>
         <button name='right' onClick={this.moveShape}>Right</button>

         <ShapeArena x={this.state.x} y={this.state.y} onShapeClick={this.resetPosition}/>
       </div>
     )
   }
 }
