import React from 'react';


// function HelloWorld (props){
//   //when inlining an object in jsx, do not forget
//   //the braces for evluation js and the braces
//   //for declaring the object
//   return<h1 style={{color: 'maroon'}}>{`Hello, ${props.name}`}</h1>
//   //transpiled into the below text by babel
//   //return React.createElement('h1', null, 'Hello, ${props.name}')
// }

class HelloWorld extends React.Component {
   constructor (props) {
     //super(props) must be called in all class based components
     //super(props) will call the same named method in the super class
     //(or parent class or extended class)
     //(e.g super(props) will call the constructor of React Component with props
     //as argument)
     // it must also be called before `this` is mutated
    super(props);

     //state is a property of this. It's plain javascript object that
     //represents the current state of the component (eg whether a user is
     //logged in, whether a list item is checked, whether a compeonent is
     // hovered, contains a list of questions queried from the database)
    this.state = {
      hovered: false
    };
    //everytime you pass a method as a callback, you must bind this to it
    // with the bind method . Otherwise, this will be null when the method
    //is finally called. In this case, this.hover is the callback for the
    //onMouseEnter prop of the h1 below.
    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
   }

  hover (){
    //this.setState method is used to update the state in reaction
    //based on user intereactions
    //It merges the given object with this.state asynchronously
    //(at React's earliest convenience)
    this.setState({hovered: true})
  }

  unHover (){
    this.setState({hovered: false})
  }

   render() {
     const hovered = this.state.hovered;
     return (
       <h1
         onMouseEnter={this.hover}
         onMouseLeave={this.unHover}
         style={{color: 'Maroon'}}>
         {`${hovered ? 'Hello' : 'Bye'}, ${this.props.name}`}
       </h1>
     )
     return
   }
 }

export default HelloWorld;
