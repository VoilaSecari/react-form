import { useState } from "react";

export default function App() {
  //definisco gli stati per lista presente e articolo nuovo
  const [articlesList, setArticlesList] = useState([
    "Titolo primo articolo",
    "Titolo secondo articolo",
    "Titolo terzo articolo",
  ]);
  const [newArticle, setNewArticle] = useState("");
  //creare un return html
  return (
    <main>
      <div className="container mt-3">
        <form className="d-flex gap-4">
          <input
            type="text"
            className="form-control grow-1"
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
          />
          <button className="btn btn-primary">Aggiungi titolo</button>
        </form>
      </div>
    </main>
  );
}
