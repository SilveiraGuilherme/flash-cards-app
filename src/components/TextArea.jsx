import { getNewId } from '../services/idService';

export default function TextArea({
  textAreaDescription = 'Label Description:',
  textAreaValue = 'Default Input Value',
  id = getNewId(),
  onTextAreaChange = null,
  maxLength = 230,
  rows = 5,
}) {
  function handleTextAreaChange({ currentTarget }) {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  }

  const currentCharacterCount = textAreaValue.length;

  return (
    <div className="flex flex-col my-4">
      <label htmlFor="inputText" className="mb-1 text-sm">
        {textAreaDescription}
      </label>
      <textarea
        id={id}
        className="border p-1"
        value={textAreaValue}
        maxLength={maxLength}
        rows={rows}
        onChange={handleTextAreaChange}
      ></textarea>
      <div className="text-right mr-1">{`${currentCharacterCount} / ${maxLength}`}</div>
    </div>
  );
}
