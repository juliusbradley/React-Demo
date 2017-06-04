import React from 'react';


function Fa (props){
  const {kind,size,spin} = props

  let spinner

  if(spin){
    spinner = 'fa-spin'
  }

return(
  <div>
    <i className={`fa fa-${kind} fa-${size} ${spinner}`}></i>
  </div>
  )
}

export default Fa;
