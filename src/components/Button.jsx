import React from 'react';

const Button = ({
  label,
  onClick,
  type = "",
  className = "",
  disabled = false,
  loading = false,
  icon,
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded ${className}`}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <span className="loader"></span> // You can define spinner CSS or use a spinner component
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
