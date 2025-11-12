// import PropTypes from "prop-types";
import "./Button.css";
import React from "react";

interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary" | "danger"; // restrict allowed variants
    onClick?: () => void;
    disabled?: boolean; 
}



const Button: React.FC<ButtonProps> = ({ label, variant, onClick, disabled }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   variant: PropTypes.oneOf(["solid", "borderless", "optional"]).isRequired,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
// };

// Button.defaultProps = {
//   disabled: false,
// };

export default Button;
