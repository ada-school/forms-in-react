import Card from "../Card";
import "./AppBody.styles.css";

export default function AppBody({ children }) {
  return (
    <main className="app-body">
      <section className="app-container">
        <Card>{children}</Card>
      </section>
    </main>
  );
}
