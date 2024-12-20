import React, { useState } from 'react';
import imageInstruction from "./matching.png"

const Matching = () => {
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [versions, setVersions] = useState(2); // Default: 2 versions
  const [output, setOutput] = useState([]);
  const [showErrorPopup, setShowErrorPopup] = useState(false);


  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Parse questions and answers from input
  const parseMatching = (text) => {
    const lines = text.split('\n').map((line) => line.trim());
    const parsed = [];
    for (let line of lines) {
      // Match pattern: Question <space> Choice Label (e.g., "1. Question A. Answer")
      const match = line.match(/^(\d+\.\s+.*?)([A-Z]\..+)$/);
      if (match) {
        const question = match[1].replace(/^\d+\.\s+/, '').trim(); // Remove the numbering
        const answer = match[2].trim();
        parsed.push({ question, answer });
      } else {
        // If format is invalid, return an empty array
        return [];
      }
    }
    return parsed;
  };

  // Generate exam versions
  const generateVersions = (questions, count) => {
    const versions = [];
    for (let i = 0; i < count; i++) {
      const shuffledAnswers = shuffleArray(questions.map((q) => q.answer));
      const version = questions.map((q, index) => ({
        question: q.question,
        answer: `${String.fromCharCode(65 + index)}. ${shuffledAnswers[index]}`, // Relabel choices dynamically
      }));
      versions.push(version);
    }
    return versions;
  };

  // Format output with renumbered questions and shuffled answers
  const formatOutput = (version) => {
    const leftColumn = version.map((q, i) => `${i + 1}. ${q.question}`).join('\n');
    const rightColumn = version.map((q, i) => `${i + 1}. ${q.answer}`).join('\n');
    return `Left Column:\n${leftColumn}\n\nRight Column:\n${rightColumn}`;
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    const parsed = parseMatching(e.target.value);
    if (parsed.length > 0) {
      setQuestions(parsed);
      setShowErrorPopup(false); // Close error popup if the input becomes valid
    } else {
      setQuestions([]);
      setShowErrorPopup(true); // Show error popup if input is invalid
    }
  };

  // Handle version generation
  const handleGenerate = () => {
    if (questions.length === 0) {
      alert('Please input valid matching questions.');
      return;
    }
    const generated = generateVersions(questions, versions);
    setOutput(generated);
  };

  // Copy version to clipboard
  const copyToClipboard = (index) => {
    const version = formatOutput(output[index]);
    navigator.clipboard.writeText(version);
    alert(`Version ${index + 1} copied to clipboard!`);
  };

  return (
    <main className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      {/* Input Section */}
      <section className="w-full lg:w-3/4 mb-8 text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Matching Questions Generator</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste your matching questions here (e.g., '1. Question A. Answer')..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-darkBlue"
        />
      </section>

      {/* Error Popup */}
      {showErrorPopup && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={imageInstruction}
              alt="Input format explanation"
              className="w-110 h-1000 mx-auto mb-4"
            />
            <p className="text-darkGray mb-4">
              Please follow the correct input format: <br />
              <strong>1. Question A. Answer</strong>
            </p>
            <button
              onClick={() => setShowErrorPopup(false)}
              className="px-4 py-2 bg-darkBlue text-white rounded-lg hover:bg-darkGreen"
            >
              Close
            </button>
          </div>
        </section>
      )}

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
              <button
                onClick={() => copyToClipboard(index)}
                className="mt-4 px-6 py-2 bg-darkBlue text-white rounded-lg hover:bg-darkGreen"
              >
                Copy Version {index + 1}
              </button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Matching;
