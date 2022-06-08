import React, {useRef} from "react";
import "./styles.css";
import {Canvas} from "@react-three/fiber";//imports the Canvas
import {OrbitControls, PerspectiveCamera}from "@react-three/drei";
//components
import Box from "./components/Box"
import Sphere from "./components/Sphere"
import Room from "./components/Room"

export default function App() {
  const ref = useRef()
  return (
    <>
    {/* Since the canvas is congained inside a div, it can be resized. The Canvas renders from its direct parent. */}
    <div className='canvasContainer'>
      {/* the canvas automatically has a scene and camera property. they can be changed */}
      <Canvas legacy
      camera={{ position: [-9, 7, 9],
      fov: 60 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 10, 5]} />
          <Room/>
          {/* <TransformControls mode="translate"> */}
          <Box />
          {/* </TransformControls> */}
          <Sphere />
          {/* Orbit Controls allow for easy testing of the scene */}
          <OrbitControls 
          ref={ref}
          minAzimuthAngle={-Math.PI/1.5}
          maxAzimuthAngle={Math.PI/7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={.8}
          minDistance={5}
          maxDistance={30}
          />
          <gridHelper position={[0,-1,0]}args={[80,40]}/>
      </Canvas>
    </div>
    </>
  );
}
