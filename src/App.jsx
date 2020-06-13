import React from 'react';
import { PipeContextProvider } from './components'
import { Dashboard, Pipe, WelcomeModal } from './Pages'
import './App.css'

function App() {
  return (
    <PipeContextProvider>
      {/* <WelcomeModal /> */}
      <Dashboard />
      {/* <Pipe /> */}
    </PipeContextProvider>
  );
}

export default App;
