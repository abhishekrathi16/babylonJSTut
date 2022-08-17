import create from 'zustand'
import {Color3, Vector3, Mesh, StandardMaterial} from '@babylonjs/core'

// zustand setup in Typescript

type Store = {
    color: String;
    changeColor: (event: any)=>void;
    height: number;
    width: number;
    depth: number;
    changeHeight: (event: any)=>void;
    changeWidth: (event: any)=>void;
    changeDepth: (event: any)=>void;
}

const useStore = create<Store>((set)=>({
    color: 'white',
    changeColor(){
        set((state)=>({ color: state.color === 'white'?'#212529':'white' }))
    },
    height: 4,
    width: 4,
    depth: 4,
    changeHeight(){
        set((state)=>({height: state.height}))
    },
    changeWidth(){
        set((state)=>({width: state.width}))
    },
    changeDepth(){
        set((state)=>({depth: state.depth}))
    }
}))

export default useStore