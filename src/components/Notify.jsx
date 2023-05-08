import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Notify = ({ message, duration, onClose, color }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    show && (
      <div
        style={{
          position: "fixed",
          top: "10",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: color || "orange",
          color: "black",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
        }}
      >
        {message}
      </div>
    )
  );
};

Notify.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Notify.defaultProps = {
  duration: 5000,
};

export default Notify;
