import { create } from 'domain';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';

const initialState:any = {
    count : 0,
    text: 'hello',
    color : 'red',
    isGood : true
}

type Color = 'red'|'orange'|'yellow'

interface State {
    color : 'red'|'orange'|'yellow';
    count:number;
    text:string;
    isGood:boolean;
}

type Action = 
    | {type:'SET_COUNT'; count:number} 
    | {type:'SET_TEXT'; text:string}
    | {type:'SET_COLOR'; color:Color}
    | {type:'TOGGLE_GOOD'};

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State |null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

const reducer=(state:State, action:Action):State=>{
    switch(action.type) {
        case 'SET_COUNT' :
            return {
                ...state,
                count : action.count
            }
        case 'SET_COLOR' :
            return {
                ...state,
                color : action.color
            }
        case 'SET_TEXT' :
            return {
                ...state,
                text : action.text
            }
        case 'TOGGLE_GOOD' :
            return {
                ...state,
                isGood : !state.isGood
            }
        default :
            throw new Error('Unhandled Error');
    }
}

export const SampleProvider=({children}:{children:React.ReactNode})=>{
    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

export const useSampleState=()=> {
    const state = useContext(SampleStateContext);
    if(!state) throw new Error(`Cannot find Sample Provider`);
    return state;
}
// Custom hook 생성

export const useSampleDispatch=()=> {
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('Cannot find Sample Provider');
    return dispatch;
}