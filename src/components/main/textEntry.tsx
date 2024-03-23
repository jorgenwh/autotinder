import React from 'react';
import './textEntry.css';

interface TextEntryProps {
  loading: boolean;
  label: string;
  size: 'tiny' | 'small' | 'medium' | 'large';
  text: string;
  setText: (text: string) => void;
}

function TextEntry({ loading, label, size, text, setText }: TextEntryProps) {

  const createLabel = () => {
    return (
      <div className="TextEntry-label">
        <h1>{label}</h1>
      </div>
    );
  }

  const createTextArea = () => {
    return (
      <textarea
        className={`TextEntry-textarea ${size}`}
        onChange={(e) => setText(e.currentTarget.value)}
        value={text}
      ></textarea>
    );
  }

  return (
    <div className="TextEntry">
      {createLabel()}
      {createTextArea()}
    </div>
  );
}

export default TextEntry;