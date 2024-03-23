import React from 'react';
import './App.css';

import OpenAiApiHandler from './api/openAiApiHandler';
import MainView from './components/main/mainView';


interface AppHeaderProps {
  mode: 'main' | 'settings';
  setMode: (mode: 'main' | 'settings') => void;
}

function AppHeader({ mode, setMode }: AppHeaderProps) {

  return (
    <div className="AppHeader">
      <div className="AppHeader-buttons-container">
        <button className={`AppHeader-chatButton${mode === 'main' ? ' clicked' : ''}`} onClick={() => setMode('main')}>Main</button>
        <button className={`AppHeader-chatButton${mode === 'settings' ? ' clicked' : ''}`} onClick={() => setMode('settings')}>Settings</button>
      </div>
      <h1 className="AppHeader-title">AutoTinder</h1>
    </div>
  );
}


const apiHandler = new OpenAiApiHandler();


function App() {
  const [mode, setMode] = React.useState<'main' | 'settings'>('main');

  let content;
  switch (mode) {
    case 'main':
      content = (
        <MainView
          apiHandler={apiHandler}
         />
      );
      break;
    case 'settings':
      content = (
        <div>
          <h1>Settings</h1>
        </div>
      );
      break;
    default:
      content = <div>Invalid mode</div>;
  }

  return (
    <div className="App">
      <AppHeader 
        mode={mode} 
        setMode={setMode} 
      />
      {content}
    </div>
  );
}

export default App;