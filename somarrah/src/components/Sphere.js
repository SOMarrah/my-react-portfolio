import React from "react";
import Text from "./Text"


export default function Sphere(props){
    return(
      
      <mesh {...props} >
        <sphereBufferGeometry args={[5, 24, 24]} />
        <meshStandardMaterial color='blue'/>
        <Text position={[0,9,0]}>
          {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
          <div className='textStyle'>
          <h1>I can update seperate Html elements!</h1>
          <p>This is for testing</p>
          </div>
        </Text>
      </mesh>
    )
  }

