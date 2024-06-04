import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalInfo from './components/PracticalInfo';

const App = () => {
 
  return (
    <>
      <h1 style={{color: '#e0e0e0'}}>Curriculum vitae</h1>
      <GeneralInfo/>
      <Education/>
      <PracticalInfo/>
    </>
  )
}

export default App;
