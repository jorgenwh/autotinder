import React from 'react';
import './responseField.css';
import ReactMarkdown from 'react-markdown';


interface ResponseFieldProps {
  response: string;
}

function ResponseField({ response }: ResponseFieldProps) {

  return (
    <div className="ResponseField">
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}

export default ResponseField;