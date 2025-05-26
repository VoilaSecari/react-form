import { useState } from "react";

export default function App() {
  //definisco gli stati per lista presente e articolo nuovo
  const [articlesList, setArticlesList] = useState([
    "Titolo primo articolo",
    "Titolo secondo articolo",
    "Titolo terzo articolo",
  ]);
  const [newArticle, setNewArticle] = useState("");

  // funzione submit!
  const handleFormSubmit = (e) => {
    //prevenire il ricarico pagina, default
    e.preventDefault();
    //copia dell'array con i nuovi elementi
    const newArticlesList = [...articlesList, newArticle];
    //aggiornare ora la nuova lista con react e la funzione
    setArticlesList(newArticlesList);
    // reset blank input dopo submit
    setNewArticle("");
  };

  //creare un return html
  return (
    <main>
      <div className="container mt-3">
        <form onSubmit={handleFormSubmit} className="d-flex gap-4">
          <input
            type="text"
            className="form-control grow-1"
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
          />
          <button className="btn btn-primary">Aggiungi titolo</button>
        </form>
        <h2 className="mt-5">Gli articoli presenti:</h2>
        <hr />

        {/* ora stampare la lista, mostrarla in pagina */}
        <ul className="mt-4">
          {articlesList.map((article, index) => (
            <li key={index} className="mt-2">
              {article}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
