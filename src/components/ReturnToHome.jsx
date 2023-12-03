export default function ReturnToHome({ onReturn, children }) {
  return (
    <div>
      <button onClick={onReturn}>Return to Home</button>
      {children}
    </div>
  );
}
