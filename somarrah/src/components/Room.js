import React from "react";




export default function Model({...props}){
  
    return(
        <>
      <mesh position={[0,-.8,0]} >
        <boxGeometry args={[15,.3,15]}/>
        <meshStandardMaterial color='tan'/>
      </mesh>
    <mesh position={[0,2.8,-7.35]} rotation={[Math.PI/2,0,0]}>
        <boxGeometry args={[15,.3,7]}/>
        <meshStandardMaterial color='tan'/>
     </mesh>
     <mesh position={[7.35,2.8,0]} rotation={[Math.PI/2,0,Math.PI/2]}>
        <boxGeometry args={[15,.3,7]}/>
        <meshStandardMaterial color='tan'/>
     </mesh>
     </>
    )
  }