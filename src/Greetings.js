import React from 'react';
import HelloWorld from './HelloWorld';


function Greetings (props){
  const {names = [] } = props;

  return (
    <ul className="greetings">
    {
      names.map(
        function (name){
          return <li><HelloWorld name={name} /></li>

        }
      )
    }
    </ul>
  )
};

export default Greetings;
