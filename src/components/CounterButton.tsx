import React from "react";

interface ButtonProps {
  color: string;
  children: React.ReactNode;
}

const CounterButton: React.FC<ButtonProps> = ({ color, children }) => {
  return (
    <span
      style={{
        cursor: "pointer",
        backgroundColor: color,
        margin: "20px",
        padding: "20px",
      }}
    >
      {children}
    </span>
  );
};

export default CounterButton;
