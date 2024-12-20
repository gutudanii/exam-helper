import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const NotificationCard = ({ status, message, onClose }) => {
  const isSuccess = status === 'success';

  useEffect(() => {
    // Automatically close the notification after 30 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 30000); // 30 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-lg w-full py-3 px-4 rounded-lg ${
        isSuccess ? 'bg-green-500' : 'bg-red-500'
      } text-white shadow-lg flex items-center justify-between`}
    >
      <div className="flex items-center space-x-4">
        <span
          className={`material-icons text-3xl ${
            isSuccess ? 'text-green-200' : 'text-red-200'
          }`}
        >
          {isSuccess ? 'check_circle' : 'error'}
        </span>
        <p className="text-lg font-medium">{message}</p>
      </div>
      <button
        className="text-white hover:text-gray-200 focus:outline-none text-xl"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

NotificationCard.propTypes = {
  status: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationCard;
