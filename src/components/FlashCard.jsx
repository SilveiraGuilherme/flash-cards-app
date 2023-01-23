export default function FlashCard({
  id,
  title = 'Title',
  description = 'Description of the card, which may have a greater number of words describing its content.',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  return (
    <div
      className={`shadow-xl border rounded-md p-4 m-2 w-80 h-48 cursor-pointer font-semibold flex items-center justify-center text-center ${fontSizeClassName}`}
      style={{ fontfamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
