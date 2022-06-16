import React, {useEffect, useRef} from "react";
import "./styles.css";
import {Canvas, useFrame, useThree} from "@react-three/fiber";//imports the Canvas
import {OrbitControls, OrthographicCamera,Box, PerspectiveCamera, PresentationControls}from "@react-three/drei";
import { useSpring, animated } from "react-spring";
import { folder, useControls} from 'leva'
//components
import Table from "./components/Table";
import Sphere from "./components/Sphere";
import Room from "./components/Room";
import SpellBook from "./components/Spellbook";
import Text from "./components/Text";
import magicBook from "./images/magicBook.png"
import Project from "./components/Project";



//make a function that takes the onClick from the HTML element and moves the camera.

function Camera(props){
  const ref = useRef()
  const set = useThree(({set})=> set)
  useEffect(()=> void set(ref.current), [])
  useFrame(()=> ref.current.updateMatrixWorld())
    return <OrthographicCamera ref={ref} {...props}/>
}

function TestArea() {
  const { scale, color, position, rotation, wireframe } = useControls("Box", {
    transform: folder({ 
      scale: {
        value: 1,
        min: 0.4,
        max: 20,
        step: 0.2,
      },
      position:{
        value:[0,0,0],
        x:{step: 0.1,
        },
        y:{step: 0.1,
        },
        z:{step: 0.1,
        },
      },
      rotation:{
        value:[0,0,0],
        x:{step: 0.1,
        },
        y:{step: 0.1,
        },
        z:{step: 0.1,
        },
      }
    }),
    material: folder({
      color: "#333",
      wireframe: false,
    })
  });
  return(
    <Box scale={ scale } position={position} rotation={rotation}>
      <meshStandardMaterial color={color} wireframe={wireframe}/>
    </Box>
  )
}

export default function App() {
  const ref = useRef()
  return (
    <>
    {/* Since the canvas is congained inside a div, it can be resized. The Canvas renders from its direct parent. */}
    <div className='canvasContainer'>
      {/* the canvas automatically has a scene and camera property. they can be changed */}
      <Canvas>
      <Camera position={[-10,8,12]} rotation={[-.4,-.6,-.2]} zoom={40} makeDefault/>
      <TestArea/>
      {/* <PresentationControls
          global={false}
          cursor={true}
          snap={false}
          speed={1}
          zoom={2}
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          azimuth={[0, 0]} 
          config={{ mass: 1, tension: 170, friction: 26 }}
          > */}
          <ambientLight intensity={0.01} />
          <directionalLight position={[0, 10, 5]} />
          <Room/>
          <Table position={[0,1,0]} scale={1}/>
          <Sphere position={[-5,0.3,-5]} scale={0.2}/>
          <SpellBook />

          {/* </PresentationControls> */}
            <mesh position={[-10,3,4]} rotation={[-.8,-.6, -.5]}>
              
        {/* <boxGeometry args={[4,3,.1]}/>
        <meshStandardMaterial color='red'/> */}
        <Text  transform sprite position={[-.1,1,.15]}>
          {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
          <div id='container'>
          <div id='spells'>
          <div className='spellEffects' onClick={(e)=>console.log('About')}>About</div>
          <div className='spellEffects' onClick={(e)=>console.log('Skills')}>Skills</div>
          <div className='spellEffects' onClick={(e)=>console.log('Contact')}>Contact</div>
          </div>
          <div className='spellBook'>
            <img src={magicBook} height="100" width="100" alt="SpellBook"/>
            </div>
          </div>
          
        </Text>
        <Project />
      </mesh>
      <OrbitControls
          minAzimuthAngle={-Math.PI/1.5}
          maxAzimuthAngle={Math.PI/7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={.8}
          minDistance={5}
          maxDistance={20}
          >
        </OrbitControls>
      
            
          <gridHelper position={[0,-1,0]}args={[80,40]}/>
      </Canvas>
    </div>
    </>
    // 
  );
}
