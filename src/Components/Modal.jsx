import { useState } from "react";

const Modal = ({ isOpen, onClose, onDeactivate }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Add Song</h3>
            <p className="text-gray-500 text-sm">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-600 text-white px-3 py-2 rounded-md mr-2"
                onClick={() => {
                  onDeactivate(); // Handle deactivate action
                  onClose();
                }}
              >
                Deactivate
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
