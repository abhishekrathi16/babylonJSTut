import {
  Animation,
  Color3,
  Vector3,
  Mesh,
  MultiMaterial,
  Texture,
  StandardMaterial,
  Color4,
} from "@babylonjs/core";
import React, { useEffect, useState, useRef } from "react";
import {
  Engine,
  Scene,
  useClick,
  useScene,
  useHover,
  Ground,
} from "react-babylonjs";
import * as BABYLON from "@babylonjs/core";
import * as R from "remeda";
import tw from "twin.macro";
import { FresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";
import { useBeforeRender } from "react-babylonjs";
import piso from "../../assets/piso.jpg";
import glass from "../../assets/glass.jpg"

const config = {
  amount: { x: 50, z: 50 },
  separation: 2,
  frameRate: 30,
  animation: {
    length: 360,
    speed: 8,
  },
};

// type SpinningBoxProps = {
//   name: string;
//   position: Vector3;
//   hoveredColor: Color3;
//   color: Color3;
// };

// const DefaultScale = new Vector3(1, 1, 1);
// const BiggerScale = new Vector3(1.25, 1.25, 1.25);

// const SpinningBox = (props: SpinningBoxProps) => {
//   const boxRef = useRef<Mesh>(null);
//   const [clicked, setClicked] = useState(false);
//   useClick(() => setClicked((clicked) => !clicked), boxRef);
//   const [hovered, setHovered] = useState(false);
//   useHover(
//     () => setHovered(true),
//     () => setHovered(false),
//     boxRef
//   );

//   const rpm = 5;
//   useBeforeRender((scene) => {
//     if (boxRef.current) {
//       var deltaTimeInMillis = scene.getEngine().getDeltaTime();
//       boxRef.current.rotation.y +=
//         (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
//     }
//   });
//   return (
//     <box
//       name={props.name}
//       ref={boxRef}
//       size={2}
//       position={props.position}
//       scaling={clicked ? BiggerScale : DefaultScale}
//     >
//       <standardMaterial
//         name={`${props.name}-mat`}
//         diffuseColor={hovered ? props.hoveredColor : props.color}
//         specularColor={Color3.White()}
//       />
//     </box>
//   );
// };

type cubeProps = {
  name: string;
  position: Vector3;
  color: Color3;
};

const Cube = (props: cubeProps) => {
  const cubeRef = useRef<Mesh>(null);
  return (
    <box
      name={props.name}
      ref={cubeRef}
      size={4}
      position={props.position}
      topBaseAt={2}
      bottomBaseAt={3}
      wrap={true}
      onCreated={(box) => box.enableEdgesRendering()}
      edgesWidth={10}
      edgesColor={new Color4(0, 0, 0, 1)}
    >
      <standardMaterial
        name={`${props.name}-cube`}
        diffuseColor={props.color}
        roughness={0}
        specularPower={16}
        //diffuseColor={Color3.Blue()}
        emissiveColor={new Color3(0.5, 0.5, 0.5)}
        reflectionFresnelParameters={FresnelParameters.Parse({
          isEnabled: true,
          leftColor: [1, 1, 1],
          rightColor: [0, 0, 0],
          bias: 0.1,
          power: 1,
        })}
        alpha={0.5}
      >
        
      </standardMaterial>
    </box>
  );
};

const dimensions = [
  { id: 1, x: -5, y: -5, z: -5, color: Color3.FromHexString('#fc0352')},
  { id: 2, x: -5, y: -5, z: 0, color: Color3.FromHexString("#fc0352") },
  { id: 3, x: -5, y: -5, z: 5, color: Color3.FromHexString("#fc0352") },
  { id: 4, x: -5, y: 0, z: -5, color: Color3.FromHexString("#fc0352") },
  { id: 5, x: -5, y: 0, z: 0, color: Color3.FromHexString("#fc0352") },
  { id: 6, x: -5, y: 0, z: 5, color: Color3.FromHexString("#fc0352") },
  { id: 7, x: -5, y: 5, z: -5, color: Color3.FromHexString("#fc0352") },
  { id: 8, x: -5, y: 5, z: 0, color: Color3.FromHexString("#fc0352") },
  { id: 9, x: -5, y: 5, z: 5, color: Color3.FromHexString("#fc0352") },
  { id: 10, x: 0, y: -5, z: -5, color: Color3.FromHexString("#03fcf8") },
  { id: 11, x: 0, y: -5, z: 0, color: Color3.FromHexString("#03fcf8") },
  { id: 12, x: 0, y: -5, z: 5, color: Color3.FromHexString("#03fcf8") },
  { id: 13, x: 0, y: 0, z: -5, color: Color3.FromHexString("#03fcf8") },
  { id: 14, x: 0, y: 0, z: 0, color: Color3.FromHexString("#03fcf8") },
  { id: 15, x: 0, y: 0, z: 5, color: Color3.FromHexString("#03fcf8") },
  { id: 16, x: 0, y: 5, z: -5, color: Color3.FromHexString("#03fcf8") },
  { id: 17, x: 0, y: 5, z: 0, color: Color3.FromHexString("#03fcf8") },
  { id: 18, x: 0, y: 5, z: 5, color: Color3.FromHexString("#03fcf8") },
  { id: 19, x: 5, y: -5, z: -5, color: Color3.FromHexString("#c80a0f") },
  { id: 20, x: 5, y: -5, z: 0, color: Color3.FromHexString("#c80a0f") },
  { id: 21, x: 5, y: -5, z: 5, color: Color3.FromHexString("#c80a0f") },
  { id: 22, x: 5, y: 0, z: -5, color: Color3.FromHexString("#c80a0f") },
  { id: 23, x: 5, y: 0, z: 0, color: Color3.FromHexString("#c80a0f") },
  { id: 24, x: 5, y: 0, z: 5, color: Color3.FromHexString("#c80a0f") },
  { id: 25, x: 5, y: 5, z: -5, color: Color3.FromHexString("#c80a0f") },
  { id: 26, x: 5, y: 5, z: 0, color: Color3.FromHexString("#c80a0f") },
  { id: 27, x: 5, y: 5, z: 5, color: Color3.FromHexString("#c80a0f") },
];

const Project = () => {
  const minZ = -((config.amount.z * config.separation) / 2);
  return (
    <div css={[tw`flex-auto`]}>
      <Engine antialias adaptToDeviceRatio canvasId="cube-canvas">
        <Scene>
          <arcRotateCamera
            name="arc"
            target={new Vector3(1, 1.5, 0)}
            alpha={Math.PI - 0.15}
            beta={Math.PI / 2 + 0.15}
            radius={minZ}
            wheelPrecision={1}
            panningSensibility={10}
          />
          <hemisphericLight
            name="light2"
            intensity={0.6}
            direction={new Vector3(1, 1, 1)}
          />
          <directionalLight
            name="shadow-light"
            setDirectionToTarget={[Vector3.Zero()]}
            direction={Vector3.Zero()}
            position={new Vector3(-40, 30, -40)}
            intensity={0.8}
            shadowMinZ={1}
            shadowMaxZ={2500}
          >
            <shadowGenerator
              mapSize={1024}
              useBlurExponentialShadowMap={true}
              blurKernel={32}
              darkness={0.8}
              shadowCasters={["box1"]}
              forceBackFacesOnly={true}
              depthScale={100}
            />
          </directionalLight>

          {dimensions.map((ele) => {
            return (
              <Cube
                key={ele.id}
                name={`cube-${ele.id}`}
                color={ele.color}
                position={new Vector3(ele.x, ele.y, ele.z)}
              />
            );
          })}
        </Scene>
      </Engine>
    </div>
  );
};

export default Project;
