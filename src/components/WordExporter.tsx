import React from 'react';
import { exportToWord } from '../wordUtils'; // Adjust path based on your structure

interface WordExporterProps {
  content: string;
}

const WordExporter: React.FC<WordExporterProps> = ({ content }) => {
  const handleExport = () => {
    exportToWord(content);
  };

  return <button onClick={handleExport}>Export to Word</button>;
};

export default WordExporter;
