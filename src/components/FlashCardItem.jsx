import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import { AiOutlineDelete as DeleteIcon } from 'react-icons/ai';

export default function FlashCardItem({
  children: flashCard,
  onDelete = null,
  onEdit = null,
}) {
  const { title, description } = flashCard;

  function handleDeleteIconClick() {
    if (onDelete) {
      onDelete(flashCard.id);
    }
  }
  function handleEditIconClick() {
    if (onEdit) {
      onEdit(flashCard);
    }
  }

  return (
    <div className="border m-2 p-2">
      <ul className="flex flex-col space-y-4">
        <li>
          <strong>Title:</strong> {title}
        </li>
        <li>
          <strong>Description:</strong> {description}
        </li>
      </ul>
      <div className="mt-4 flex justify-end items-center space-x-4">
        <EditIcon
          className="cursor-pointer"
          size={24}
          onClick={handleEditIconClick}
        />
        <DeleteIcon
          className="cursor-pointer"
          size={24}
          onClick={handleDeleteIconClick}
        />
      </div>
    </div>
  );
}
