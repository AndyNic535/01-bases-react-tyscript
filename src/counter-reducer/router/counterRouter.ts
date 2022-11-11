import { CounterAction } from "../actions/counterActions";
import { CounterState } from "../interfaces/counterInterfaces";

export const counterReducer = ( state: CounterState, action: CounterAction ) : CounterState => {

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