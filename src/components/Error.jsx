export default function Error({ children: errorMessage }) {
  return (
    <div className="flex justify-center font-semibold text-red-800">
      {errorMessage}
    </div>
  );
}
