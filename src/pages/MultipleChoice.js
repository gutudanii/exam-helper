import React, { useState } from 'react';
import NotificationCard from '../components/NotificationCard';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { ContentCopy as CopyIcon, Info as InfoIcon } from '@mui/icons-material';

const MultipleChoice = () => {
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [versions, setVersions] = useState(2); // Default: 2 versions
  const [output, setOutput] = useState([]);
  const [notification, setNotification] = useState({ show: false, status: '', message: '' });
  const [showInstructions, setShowInstructions] = useState(false);

  // Trigger Notification
  const triggerNotification = (status, message) => {
    setNotification({ show: true, status, message });
    setTimeout(() => {
      setNotification({ show: false, status: '', message: '' });
    }, 3000); // Hide notification after 3 seconds
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Parse questions and choices from input
  const parseQuestions = (text) => {
    const lines = text.split('\n').map((line) => line.trim());
    const parsedQuestions = [];
    let currentQuestion = null;

    lines.forEach((line) => {
      // Detect question lines (e.g., "1. What is ...?")
      if (line.match(/^\d+\./)) {
        if (currentQuestion) {
          parsedQuestions.push(currentQuestion);
        }
        currentQuestion = { question: line.replace(/^\d+\.\s*/, ''), choices: [] };
      }
      // Detect choice lines (e.g., "A. Option 1")
      else if (currentQuestion && line.match(/^[A-Z]\.\s*/)) {
        currentQuestion.choices.push(line.replace(/^[A-Z]\.\s*/, ''));
      }
    });

    if (currentQuestion) {
      parsedQuestions.push(currentQuestion);
    }

    return parsedQuestions;
  };

  // Generate exam versions
  const generateVersions = (questions, count) => {
    const versions = [];
    for (let i = 0; i < count; i++) {
      const shuffledQuestions = shuffleArray([...questions]).map((q) => ({
        question: q.question,
        choices: shuffleArray([...q.choices]),
      }));
      versions.push(shuffledQuestions);
    }
    return versions;
  };

  // Format output with relabeled questions and choices
  const formatOutput = (version) => {
    return version
      .map((q, i) => {
        const formattedChoices = q.choices.map(
          (choice, index) => `${String.fromCharCode(65 + index)}. ${choice}`
        );
        return `${i + 1}. ${q.question}\n${formattedChoices.join('\n')}`;
      })
      .join('\n\n');
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    const parsed = parseQuestions(e.target.value);
    setQuestions(parsed);
  };

  // Handle version generation
  const handleGenerate = () => {
    if (questions.length === 0) {
      triggerNotification('error', 'Please input valid questions.');
      return;
    }
    const generated = generateVersions(questions, versions);
    setOutput(generated);
    triggerNotification('success', 'Exam versions generated successfully!');
  };

  // Copy version to clipboard
  const copyToClipboard = (index) => {
    const version = formatOutput(output[index]);
    navigator.clipboard.writeText(version);
    triggerNotification('success', `Version ${index + 1} copied to clipboard!`);
  };

  // Open Instructions Popup
  const openInstructions = () => {
    setShowInstructions(true);
  };

  // Close Instructions Popup
  const closeInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      {/* Notification Card */}
      {notification.show && (
        <NotificationCard
          status={notification.status}
          message={notification.message}
          onClose={() => setNotification({ show: false, status: '', message: '' })}
        />
      )}

      {/* Instructions Button */}
      <section className="w-full lg:w-3/4 mb-8 text-right">
        <Button
          variant="outlined"
          startIcon={<InfoIcon />}
          onClick={openInstructions}
          className="text-darkBlue"
        >
          Instructions
        </Button>
      </section>

      {/* Input Section */}
      <section className="w-full lg:w-3/4 mb-8 text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Multiple Choice Generator</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste your questions here, one per line..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-darkBlue"
        />
      </section>

      {/* Options Section */}
      <section className="w-full lg:w-3/4 flex justify-between items-center mb-8">
        <label htmlFor="versions" className="text-lg font-medium text-darkGray">
          Select Number of Versions:
        </label>
        <select
          id="versions"
          value={versions}
          onChange={(e) => setVersions(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-darkBlue"
        >
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
        <button
          onClick={handleGenerate}
          className="ml-4 px-6 py-2 bg-darkBlue text-white rounded-lg hover:bg-darkGreen"
        >
          Generate Versions
        </button>
      </section>

      {/* Output Section */}
      {output.length > 0 && (
        <section className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {output.map((version, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-darkBlue mb-4">
                Version {index + 1}
              </h2>
              <textarea
                readOnly
                value={formatOutput(version)}
                className="w-full h-40 p-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <Button
                onClick={() => copyToClipboard(index)}
                variant="contained"
                startIcon={<CopyIcon />}
                className="mt-4 bg-darkBlue hover:bg-darkGreen text-white"
              >
                Copy to Clipboard
              </Button>
            </div>
          ))}
        </section>
      )}

      {/* Instructions Popup */}
      <Dialog open={showInstructions} onClose={closeInstructions}>
        <DialogTitle>How to Use the Multiple Choice Generator</DialogTitle>
        <DialogContent>
          <ul className="list-disc pl-6">
            <li>Input your questions in the following format:</li>
            <pre className="bg-gray-100 p-2 rounded-md my-2">
              1. What is the capital of France?{'\n'}A. Paris{'\n'}B. London{'\n'}C. Rome{'\n'}D. Berlin
            </pre>
            <li>Select the number of versions you want to generate.</li>
            <li>Click "Generate Versions" to create multiple shuffled versions.</li>
            <li>Click "Copy to Clipboard" to copy a version for use.</li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeInstructions} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default MultipleChoice;
