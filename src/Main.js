//Whenever you write jsx in your file you must import the react package,
//because jsx to React.createElement function calls
import React from 'react';
import HelloWorld from './HelloWorld';
import Square, {BlueSquare} from './Square';
import Rectangle from './Rectangle';
import Shape from './Shape';
import Greetings from './Greetings';
import ShadesofGrey from './ShadesofGrey';
import Fa from './Fa';
import Gridboard from './Gridboard';
import Timer from './Timer';
import Stopwatch from './Stopwatch';
import Search from './Search';
import Shapemover from './Shapemover';
import Shapemaker from './Shapemaker'

const names = [
  'Nicholas',
  'Siobhan',
  'Chase',
  'Amin',
  'Julius',
  'Serena',
  'Nic',
  'Ahmed',
  'Trista',
]

function Main (props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return (
    <div style={style} className="main">
     <Search data={names} />
       <Shapemover />
       <Timer />
       <Stopwatch />
       <Shape colors={['Yellow', 'Brown', 'Aquamarine', 'Gainsboro']} />
       <HelloWorld name="Jon Snow" />
       <HelloWorld name="Daenerys Targaryan" />
       <HelloWorld name="Cersei Lannister" />
       <Rectangle />
       <Square color="LimeGreen" />
       <Square color="Fuchsia" />
       <Square color="Brown" />
       <Shape color="Red" type="Circle" />
      <Shape color="Blue" type="Square" />
      <Greetings names={['Shaq','Kobe','Lebron']}/>
      <ShadesofGrey />
      <Fa kind="plane" />
      <Fa kind="cog" size="4x" />
      <Fa kind="spinner" size="2x" />
      <Fa kind="plane" spin={true} size="4x" />
      <Gridboard cols={4} rows={4} isBordered={true} />
      <Gridboard cols={6} rows={6} oddColor={'Red'}
        evenColor={'Black'} isBordered={true} />
      <Gridboard cols={8} rows={8} />
      <Gridboard cols={6} rows={2} oddColor='red' isBordered={true} />

    </div>
   );
 }

 export default Main;
