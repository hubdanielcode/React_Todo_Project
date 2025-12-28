import "./Button.css";

const Button = ({ onClick, text, className, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      text={text}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export { Button };
