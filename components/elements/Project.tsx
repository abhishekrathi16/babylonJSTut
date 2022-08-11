import { Animation, Vector3 } from "@babylonjs/core";
import React,{ useEffect, useState, useRef } from 'react'
import {Engine, Scene, useScene} from "react-babylonjs"
import * as R from 'remeda'
import tw from 'twin.macro'

function combine<T>(list1: T[], list2: T[]): T[][]{
    return list1.map((x)=> list2.map((y)=>[x,y])).reduce((acc, tuple)=> acc.concat(tuple),[])
}

const Project = () => {
    return(
        <Engine antialias adaptToDeviceRatio canvasId="">
            <Scene>
                <arcRotateCamera name="arc" target={new Vector3(0,0,0)} alpha={} beta={} radius={}/>
                <hemisphericLight name="light" intensity={1} direction={Vector3.Up()}/>
                
            </Scene>
        </Engine>
    )
}