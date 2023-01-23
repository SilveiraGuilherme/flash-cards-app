export default function Button({
  children: buttonDescription = 'Button Description',
  onButtonClick = null,
  colorClass = 'bg-gray-200',
  type = 'button',
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      type={type}
      className={`border rounded-md p-2 ${colorClass}`}
      onClick={handleButtonClick}
    >
      {buttonDescription}
    </button>
  );
}
