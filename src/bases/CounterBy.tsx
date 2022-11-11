import { useState } from "react";
import { Props, CounterState } from '../interfaces/interfaces';

export const CounterBy = ( { initialValue = 0 } : Props ) => {

    const [ counterState , setCounterState ] = useState<CounterState>({

        counter: initialValue,
        clicks: 0

    });

    const { counter , clicks } = counterState;

    const handleClick = ( value: number ) => {

        setCounterState( ({ counter, clicks }) => ({

            counter: counter + value,
            clicks: clicks + 1

        }));

    };

  return (
    <>

        <h1>CounterBy: { counter }</h1>
        <h1>Clicks: { clicks }</h1>
        <br />

        <button onClick={ () => handleClick( 1 ) }> + 1 </button>
        <button onClick={ () => handleClick( 5 ) }> + 5 </button>

    </>
  );
};
