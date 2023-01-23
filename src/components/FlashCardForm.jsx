import { useEffect, useState } from 'react';
import Button from './Button';
import Error from './Error';
import TextArea from './TextArea';
import TextInput from './TextInput';

export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  children: flashCard = null,
}) {
  const [title, setTitle] = useState(flashCard?.title || '');
  const [description, setDescription] = useState(flashCard?.description || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (createMode) {
      clearFields();
    }
  }, [createMode]);

  const backGroundClassName = createMode ? 'bg-green-100' : 'bg-yellow-100';

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }
  function handleDescriptionChange(newDescription) {
    setDescription(newDescription);
  }

  function clearFields() {
    setTitle('');
    setDescription('');
  }

  function validadeForm() {
    return title.trim() !== '' && description.trim() !== '';
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validadeForm()) {
      setError('');
      if (onPersist) {
        onPersist(title, description);
        clearFields();
      }
    } else {
      setError('You should add a title and description.');
    }
  }

  function handleFormReset() {
    setError('');
    clearFields();
  }

  return (
    <form
      className={`${backGroundClassName} p-4`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <h2 className="text-center font-semibold">Flash Cards Management</h2>
      <TextInput
        labelDescription="Title:"
        inputValue={title}
        onInputChange={handleTitleChange}
      />
      <TextArea
        textAreaDescription="Description:"
        textAreaValue={description}
        onTextAreaChange={handleDescriptionChange}
      />
      <div className="flex items-center justify-between">
        <Error>{error}</Error>
        <div className="flex gap-1">
          <Button colorClass="bg-red-300" type="reset">
            Clear
          </Button>
          <Button colorClass="bg-green-300" type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
