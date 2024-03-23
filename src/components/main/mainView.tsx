import React from 'react';
import './mainView.css';

import TextEntry from './textEntry';
import ResponseField from './responseField';
import OpenAiApiHandler from '../../api/openAiApiHandler';
import { buildPrompt } from '../../api/prompt';

interface MainViewProps {
  apiHandler: OpenAiApiHandler;
}

function MainView({ apiHandler }: MainViewProps) {

  const [loading, setLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [bio, setBio] = React.useState<string>('');
  const [interests, setInterests] = React.useState<string>('');
  const [occupation, setOccupation] = React.useState<string>('');
  const [other, setOther] = React.useState<string>('');
  const [response, setResponse] = React.useState<string>('Prompt for å generere epic Tinder openers ...');

  const clear = () => {
    setName('');
    setBio('');
    setInterests('');
    setOccupation('');
    setOther('');
    setResponse('Prompt for å generere epic Tinder openers ...');
  }

  const prompt = async () => {
    if (!name) {
      alert('Skriv inn et navn for å generere åpningsmeldinger.');
      return;
    }

    setLoading(true);
    setResponse('Loading ...');
    const prompt = buildPrompt(name, bio, interests, occupation, other);
    const response = await apiHandler.promptChatModel(prompt);
    setResponse(response);
    setLoading(false);
  }

  return (
    <div className="MainView">
      <button className="MainView-clearButton" onClick={clear}>Clear</button>
      <TextEntry
        loading={loading}
        label={'Name'}
        text={name}
        setText={setName}
        size='tiny'
      />
      <TextEntry
        loading={loading}
        label={'Bio'}
        text={bio}
        setText={setBio}
        size='large'
      />
      <TextEntry
        loading={loading}
        label={'Interests'}
        text={interests}
        setText={setInterests}
        size='small'
      />
      <TextEntry
        loading={loading}
        label={'Occupation'}
        text={occupation}
        setText={setOccupation}
        size='tiny'
      />
      <TextEntry
        loading={loading}
        label={'Other'}
        text={other}
        setText={setOther}
        size='medium'
      />
      <button className="MainView-promptButton" onClick={prompt}>Prompt</button>
      <ResponseField
        response={response}
      />
    </div>
  );
}

export default MainView;