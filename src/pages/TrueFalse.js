import React, { useState } from 'react';

const TrueFalse = () => {
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [versions, setVersions] = useState(2); // Default: 2 versions
  const [output, setOutput] = useState([]);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Parse questions from input
  const parseQuestions = (text) => {
    const lines = text.split('\n').map((line) => line.trim());
    return lines
      .filter((line) => line.match(/^\d+\./)) // Only keep lines starting with numbers (e.g., "1.")
      .map((line) => line.replace(/^\d+\.\s*/, '')); // Remove numbering from the line
  };

  // Generate exam versions
  const generateVersions = (questions, count) => {
    const versions = [];
    for (let i = 0; i < count; i++) {
      const shuffledQuestions = shuffleArray([...questions]);
      versions.push(shuffledQuestions);
    }
    return versions;
  };

  // Format output with renumbered questions
  const formatOutput = (version) => {
    return version
      .map((q, i) => `${i + 1}. ${q}`)
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
      alert('Please input valid questions.');
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
        <h1 className="text-3xl font-bold text-darkBlue mb-4">True/False Generator</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste your True/False questions here, one per line..."
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

export default TrueFalse;
