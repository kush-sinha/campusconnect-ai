'use client';
import React, { useState } from 'react';
import { getCareerSuggestions } from '../GeminiPrompt';

export default function CareerAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const result = await getCareerSuggestions(input);
    setResponse(result?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎓 Gemini Career Assistant</h2>
      <textarea
        rows={4}
        cols={60}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., I want to become an ML engineer in 6 months"
      />
      <br />
      <button onClick={handleSubmit}>Get Suggestions</button>
      <div style={{ marginTop: '2rem', backgroundColor: '#eee', padding: '1rem' }}>
        <h3>💡 Gemini Says:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}