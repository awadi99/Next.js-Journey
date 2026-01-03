import "./loading.css";

export default function Loading() {
  return (
    <div className="loading-section">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading...</p>
    </div>
  );
}
