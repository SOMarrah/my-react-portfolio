import React from "react";
import Text from "./Text"



export default function Box({...props}){
  
    return(
      <mesh position={[0,0,0]} >
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color='red'/>
        <Text position={[0,2,0]}>
          {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
          <div className='textStyle'>
          <h1>Hello World!</h1>
          </div>
        </Text>
      </mesh>
    )
  }