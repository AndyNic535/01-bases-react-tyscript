import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [ counter , setCounter ] = useState( 0 );

    const counterElement = useRef<HTMLHeadingElement>( null );

    const handleClick = () => {

        if ( counter < MAXIMUN_COUNT ) {

            setCounter( previo => previo + 1 );

        };

    };

    //<<<<<<<<<< Validacion con Math >>>>>>>>>>//

    // const handleClick = () => {
    //     setCounter( previo => Math.min( previo + 1, MAXIMUN_COUNT ) );
    // };

    useEffect( () => {

        if ( counter < 10 ) return;

        console.log( '%cSe llego al valor maximo', 'color: white; background-color: red;' );

        const timeLine = gsap.timeline();

            timeLine.to( counterElement.current, { y: -20, duration: 0.2, ease: 'ease.out' } );
            timeLine.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } );

    }, [ counter ] );

  return (
    <>

        <h1>CounterEffect:</h1>
        <h2 ref={ counterElement }>{ counter }</h2>
        <br />

        <button onClick={ handleClick }>
            + 1
        </button>

    </>
  );
};
