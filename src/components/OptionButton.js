import React from 'react';
import PropTypes from 'prop-types';

const OptionButton = ({ icon, label, color }) => {
  return (
    <button
      className={`flex items-center justify-start p-4 ${color} text-white rounded-lg shadow-md hover:opacity-90 focus:opacity-90 transition-opacity`}
    >
      <span className="material-icons text-3xl mr-4">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
    </button>
  );
};

OptionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default OptionButton;
