import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const handleFormSubmit = (value, dateOne, dateTwo, resenha) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        value,
        dateOne,
        dateTwo,
        resenha,
      },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const modalToggle = (value) => {
    setModal(value);
  };
  let modalOn;
  if (modal) {
    modalOn = (
      <BookCreate onClick={modalToggle} onFormSubmit={handleFormSubmit} />
    );
    return modalOn;
  }
  let title;
  if (books.length > 0) {
    title = <h1>Lista de Leituras 2023</h1>;
  } else {
    title = <h1>Adicione Livros a Sua Lista...</h1>;
  }
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">Resenhei</div>
          <div
            className="modal-bookcreate"
            onClick={() => {
              setModal(true);
            }}
          >
            Adicionar Livro <span>+</span>
          </div>
        </div>
      </header>
      <div className="content-container">
        <div>{modalOn}</div>
        <div className="titulo-lista">{title}</div>
        <BookList onDelete={deleteBookById} books={books} />
      </div>
    </div>
  );
}

export default App;
