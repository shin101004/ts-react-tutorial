import React, {Reducer, useReducer} from "react";
import { useSampleDispatch, useSampleState } from "./SampleContext";
// interface Color {
//     color : 'red'|'orange'|'yellow';
// }

// interface Action extends State{
//     type :{
//         COUNT:{type:'SET_COUNT'; count : number};
//         TEXT:{type:'SET_TEXT'; text:string};
//         COLOR :{type:'SET_COLOR'; color:Color};
//         TOGGLE:{type:'TOGGLE_GOOD'};
//     }
// }

// type Color = 'red' | 'orange' | 'yellow';

// type State = {
//     count : number;
//     text : string;
//     isGood : boolean;
//     color : Color
// }

// type Action = 
//     | {type:'SET_COUNT'; count:number}
//     | { type:'SET_TEXT'; text:string}
//     | {type:'SET_COLOR'; color:Color}
//     | {type:'TOGGLE_GOOD'};
const ReducerSample=()=> {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const setCount = () => dispatch({type:'SET_COUNT', count:5});
    const setText = () => dispatch({type:'SET_TEXT', text:'bye'});
    const setColor = () => dispatch({type:'SET_COLOR', color:'orange'});
    const toggleGood = () => dispatch({type:'TOGGLE_GOOD'});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text : </code> {state.text}
            </p>
            <p>
                <code>color : </code> {state.color}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}

export default ReducerSample