import React from "react";
import Text from "./Text"



export default function Table(props){
  
    return(
      //can pass props such as size, position rotation etc!
      <mesh {...props} >
        <boxGeometry args={[4,.5,4]}/>
        <meshStandardMaterial color='brown'/>
        <Text position={[0,.5,0]} rotation={[-Math.PI/2,0,0]} scale={1}>
          {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
          <div className='textStyle'>
          <h1>Hello World!</h1>
          </div>
        </Text>
      </mesh>
    )
  }