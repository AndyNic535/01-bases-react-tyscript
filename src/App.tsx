import { Counter } from "./bases/Counter";
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from "./counter-reducer/CounterReducerComponent";
// import { CounterReducerComponent } from "./bases/CounterReducerComponent";

export const App = () => {

  return (
    <>

      <Counter initialValue={ 15 } />
      <hr />

      <CounterBy />
      <hr />

      <CounterEffect />
      <hr />

      <CounterHook />
      <hr />

      <CounterReducerComponent />
      <hr />

    </>
  );
};
