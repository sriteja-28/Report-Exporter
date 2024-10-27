import React from 'react';
import { exportToPDF } from '../pdfUtils';
import { exportToWord } from '../wordUtils';

type ExportButtonProps = {
  format: 'pdf' | 'word';
  content: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ format, content }) => {
  const handleExport = () => {
    if (content.trim() === '') {
      alert('Please enter some content before exporting.');
      return;
    }

    if (format === 'pdf') {
      exportToPDF(content);
      alert('Successfully exported to PDF!');
    } else if (format === 'word') {
      exportToWord(content);
      alert('Successfully exported to Word!');
    }
  };

  return <button onClick={handleExport}>Export to {format.toUpperCase()}</button>;
};

export default ExportButton;
