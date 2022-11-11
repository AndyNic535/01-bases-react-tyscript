import { useReducer } from "react";
import { CounterState } from "./interfaces/counterInterfaces";
import { counterReducer } from "./router/counterRouter";
import * as CounterActions from './actions/counterActions';


const INITIAL_STATE : CounterState = {

    counter: 0,
    previus: 0,
    changues: 0

};

export const CounterReducerComponent = () => {

    const [ counterState, dispatch ] = useReducer( counterReducer , INITIAL_STATE );

    const handleReset = () => {

        dispatch( CounterActions.doReset() );

    };

    const increaseBy = ( value : number ) => {

        dispatch( CounterActions.doIncreaseBy( value ) );

    };

  return (
    <>

        <h1>CounterReducerComponent Segmentado</h1>
        <br />

        <pre>
            { JSON.stringify( counterState, null, 2 ) }
        </pre>

        <button onClick={ () => increaseBy( 1 ) }>
            + 1
        </button>

        <button onClick={ () => increaseBy( 5 ) }>
            + 5
        </button>

        <button onClick={ () => increaseBy( 10 ) }>
            + 10
        </button>

        <button onClick={ handleReset }>
            Reset
        </button>

    </>
  );
};
