import { useState } from "react";

interface Props {

    initialValue?: number

};

export const Counter = ( { initialValue = 0 } : Props ) => {

    const [ counter , setCounter ] = useState( initialValue );

    const handleClick = () => {

        setCounter( counter + 1 );

    };

    
    //<<<<<<<<<< Sumar valor previo >>>>>>>>>>//

    // const handleClick = () => {
    //     setCounter( previo => previo + 1 );
    // };

  return (
    <>

        <h1>Counter: { counter }</h1>
        <br />

        <button onClick={ handleClick }>
            + 1
        </button>

    </>
  );
};
