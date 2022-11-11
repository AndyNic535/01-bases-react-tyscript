import { useReducer } from "react";


interface CounterState {

    counter: number,
    previus: number,
    changues: number,

}

const INITIAL_STATE : CounterState = {

    counter: 0,
    previus: 0,
    changues: 0

};

type CounterAction = 

    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'Reset' }

const counterReducer = ( state: CounterState, action: CounterAction ) : CounterState => {

    switch ( action.type ) {

        case 'Reset':
            
            return {

                counter: 0,
                previus: 0,
                changues: 0

            };

        case 'increaseBy':

            return {

                counter: state.counter + action.payload.value,
                previus: state.counter,
                changues: state.changues + 1,

            };
    
        default:

            return state;
    }

};

export const CounterReducerComponent = () => {

    const [ counterState, dispatch ] = useReducer( counterReducer , INITIAL_STATE );

    const handleReset = () => {

        dispatch({ type: 'Reset' });

    };

    const increaseBy = ( value : number ) => {

        dispatch({

            type: 'increaseBy',
            payload: { value }

        });

    };

  return (
    <>

        <h1>CounterReducerComponent</h1>
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
