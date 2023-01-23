export default function FlashCards({ children: flashCards }) {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap border p-1">
      {flashCards}
    </div>
  );
}
