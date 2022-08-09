import create from 'zustand'

// zustand setup in Typescript

type Store = {
    color: String;
    changeColor: (event: any)=>void;
}

const useStore = create<Store>((set)=>({
    color: 'white',
    changeColor(){
        set((state)=>({ color: state.color === 'white'?'#212529':'white' }))
    }
}))

export default useStore