import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import ReducerSample from "./ReducerSample"
import MyForm from "./MyForm";
import { SampleProvider } from './SampleContext';

const App=()=>{
  const onSubmit = (form:{name:string; description:string})=>{
    console.log(form);
  }

  return (
    <>
      <SampleProvider>
        <MyForm onSubmit={onSubmit} />
        <Counter/>
        <ReducerSample/>
      </SampleProvider>
    </>
  )
}

export default App;
