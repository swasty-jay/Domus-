// src/Button.js
import React from "react";
import PropTypes from "prop-types";

const Button = ({
  variant = "primary", // 'primary', 'secondary', 'outline', 'danger'
  size = "md", // 'sm', 'md', 'lg'
  children,
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  // Define base styles
  const baseStyles =
    "font-medium rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50";

  // Variant styles
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Disabled styles
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine all classes
  const combinedClasses =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
