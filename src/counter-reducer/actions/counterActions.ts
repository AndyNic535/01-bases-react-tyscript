
export type CounterAction = 

| { type: 'increaseBy', payload: { value: number } }
| { type: 'Reset' };


export const doReset = () : CounterAction => {

    return { type: 'Reset' };

};

export const doIncreaseBy = ( value : number ) : CounterAction => {

    return {

        type: 'increaseBy',
        payload: { value }
    };

};