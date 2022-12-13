import React, { Component }  from 'react';

export default function DisplayQA({ jeopardyQA, getJeopardyQA }) {
    return (
      <>
        <button onClick={getJeopardyQA} className="question"> Get Question</button>
      </>
    );
  }