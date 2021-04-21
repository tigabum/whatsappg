import { createContext, useContext, useReducer } from "react"

export const stateContext = createContext();

export const StateProvider = ({reducer,initalState,children})=>(
    <stateContext.Provider value={useReducer(reducer,initalState)} >
{children}
</stateContext.Provider>

);


export const useStateValue = ()=>useContext(stateContext);