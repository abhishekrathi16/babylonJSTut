import { Animation, Color3, Vector3 } from "@babylonjs/core";
import React,{ useEffect, useState, useRef } from 'react'
import {Engine, Scene, StandardMaterial, useScene} from "react-babylonjs"
import * as R from 'remeda'
import tw from 'twin.macro'

function combine<T>(list1: T[], list2: T[]): T[][]{
    return list1.map((x)=> list2.map((y)=>[x,y])).reduce((acc, tuple)=> acc.concat(tuple),[])
}

const config = {
    amount: {x: 50, z: 50},
    separation: 2,
    frameRate: 30,
    animation: {
        length: 360,
        speed: 8
    }
}

const Project = () => {
    const minZ = -((config.amount.z * config.separation) / 2)
    return(
        <div css={[tw`flex-auto`]}>
        <Engine antialias adaptToDeviceRatio canvasId="cube-canvas">
            <Scene>
                <arcRotateCamera name="arc" target={new Vector3(1,1.5,0)} alpha={Math.PI - 0.15} beta={Math.PI/2 + 0.15} radius={minZ}/>
                <hemisphericLight name="light2" intensity={0.6} direction={Vector3.Up()}/>
                <box name="cube1" position={new Vector3(1,1,0)} depth={4} height={12} width={12}/>
                <box name="cube2" position={new Vector3(1,1,5)} depth={4} height={12} width={12}/>
                <box name="cube3" position={new Vector3(1,1,10)} depth={4} height={12} width={12} rotation={new Vector3(0,0,1)}/>
            </Scene>
        </Engine>
        </div>
    )
}

export default Project