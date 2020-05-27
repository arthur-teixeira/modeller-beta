import React from 'react';
import { Header, PipeContextProvider } from './components'
import { Dashboard, Pipe, WelcomeModal } from './Pages'
import './App.css'

function App() {
  return (
    <PipeContextProvider>
      {/* <WelcomeModal /> */}
      <Header />
      {/* <Dashboard /> */}
      <Pipe />
    </PipeContextProvider>
  );
}

export default App;
