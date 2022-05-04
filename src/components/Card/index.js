import "./Card.styles.css";

export default function Card({ children }) {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}
