import React, { useEffect } from 'react';
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import './Toast.css';

const Toast = ({ isShow, message, type, onClose }) => {
  useEffect(() => {
    if (isShow) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isShow, onClose]);

  return (
    <div className={`toast-container ${isShow ? "toast-show" : "toast-hide"}`}>
      <div
        className={`toast-content ${
          type === "delete" ? "toast-delete" : "toast-add"
        }`}
      >
        <div
          className={`toast-icon-container ${
            type === "delete" ? "icon-delete" : "icon-add"
          }`}
        >
          {type === "delete" ? (
            <MdDeleteOutline className="toast-icon text-red-500" />
          ) : (
            <LuCheck className="toast-icon text-green-500" />
          )}
        </div>
        <p className="toast-message">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
