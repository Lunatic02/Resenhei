const BookShow = ({ book }) => {
  return (
    <div>
      <h2>{book.value}</h2>
      <h3>
        Resenha Livro: <br></br>
      </h3>
      <p>{book.resenha}</p>
      <h4>
        Lido em: {book.dateOne} até {book.dateTwo}
      </h4>
    </div>
  );
};

export default BookShow;
