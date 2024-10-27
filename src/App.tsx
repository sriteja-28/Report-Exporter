import React, { useState } from 'react';
import ExportButton from './components/ExportButton'; // Adjust the path as necessary
import './App.css'; // Ensure this path is correct based on your project structure

const App: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Report Exporter</h1>
      <textarea
        className="content-textarea"
        value={content}
        onChange={handleContentChange}
        placeholder="Enter your content here..."
        rows={10}
      />
      <div className="export-buttons">
        <ExportButton format="pdf" content={content} />
        <ExportButton format="word" content={content} />
      </div>
    </div>
  );
};

export default App;
