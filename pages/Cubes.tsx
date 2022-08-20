import {
  Animation,
  Color3,
  Vector3,
  Mesh,
  MultiMaterial,
  Texture,
  StandardMaterial,
  Color4,
  StoreOp,
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
import tw from "twin.macro";
import { FresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";
import { useBeforeRender } from "react-babylonjs";
import useStore from "../store/store";

const config = {
  amount: { x: 50, z: 50 },
  separation: 2,
  frameRate: 30,
  animation: {
    length: 360,
    speed: 8,
  },
};

type cubeProps = {
  name: string;
  position: Vector3;
  color: Color3;
  height: number;
  width: number;
  depth: number;
};

const Cube = (props: cubeProps) => {
  const cubeRef = useRef<Mesh>(null);
  const rpm = 5;
  useBeforeRender((scene) => {
    if (cubeRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      cubeRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
      // cubeRef.current.rotation.x += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });
  return (
    <box
      name={props.name}
      ref={cubeRef}
      //   size={4}
      width={props.height}
      height={props.width}
      depth={props.depth}
      position={props.position}
      topBaseAt={2}
      bottomBaseAt={3}
      wrap={true}
      onCreated={(box) => box.enableEdgesRendering()}
      edgesWidth={10}
      edgesColor={new Color4(0, 0, 0, 1)}
      faceColors={[
        new Color4(1, 1.5, 1, 0.5),
        new Color4(1, 1.5, 2, 1),
        new Color4(1.5, 0, 1, 1),
        new Color4(2, 1, 1, 1),
        new Color4(1, 1.5, 1, 1),
        new Color4(1, 2, 1.5, 1),
      ]}
    >
      <standardMaterial
        name={`${props.name}-cube`}
        diffuseColor={props.color}
        roughness={0}
        specularPower={16}
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
        {/* <texture assignTo={"diffuseTexture"} url="../../assets/glass.jpg"/> */}
        {/* issue on how to use texture here*/}
      </standardMaterial>
    </box>
  );
};

const dimensions = [
  { id: 1, x: -5, y: -5, z: -5, color: Color3.FromHexString("#fc0352") },
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

const Cubes = () => {
  const minZ = -((config.amount.z * config.separation) / 2);
  const [height, setHeight] = useState(4);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const store = useStore();
  useEffect(()=>{
    let length = store.height
    let width = store.width
    let depth = store.depth
  })
  return (
    <>
      <main>
        <h1 tw='bg-gray-100 rounded-x1["0.75rem"] p-8'>Cubes</h1>
      </main>
      <div css={[tw`flex-auto`]}>
        <Engine antialias adaptToDeviceRatio canvasId="cube-canvas">
          <Scene clearColor={new Color4(0.2, 0.4, 0.75, 1.0)}>
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
                  height={store.height}
                  width={store.width}
                  depth={store.depth}
                />
              );
            })}
          </Scene>
        </Engine>
      </div>
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="height"
            >
              Height
            </label>
            <input
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="Height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.valueAsNumber);
              }}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="width"
            >
              Width
            </label>
            <input
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="width"
              type="number"
              placeholder="Width"
              value={width}
              onChange={(e) => {
                setWidth(e.target.valueAsNumber);
              }}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="depth"
            >
              Depth
            </label>
            <input
              className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="depth"
              type="number"
              placeholder="Depth"
              value={depth}
              onChange={(e) => {
                setDepth(e.target.valueAsNumber);
              }}
            />
          </div>
          <button
              type="submit"
              className="border-2 border-green-400 bg-white text-green-500 rounded-lg p-1 md:p-2 active:border-green-300 text-xs sm:text-lg"
              onClick={(e)=>{
                e.preventDefault()
                store.changeHeight(height)}}
            >
              Update
          </button>
        </form>
        <div>{height}</div>
        <div>{width}</div>
        <div>{depth}</div>
      </div>
    </>
  );
};

export default Cubes;
