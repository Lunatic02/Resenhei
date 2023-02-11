import '../styles/BookShow.css';

const BookShow = ({ book }) => {
  let datas;
  if (book.dateOne) {
    datas = (
      <h3>
        {book.dateOne + ' até '}
        {book.dateTwo}
      </h3>
    );
  }
  let titulo;
  if (book.value) {
    titulo = (
      <div className="titulo-livro">
        <h2>{book.value}</h2>
        {datas}
      </div>
    );
  }
  let resenha;
  if (book.resenha) {
    resenha = <p>{book.resenha}</p>;
  }
  return (
    <div>
      {titulo}
      {resenha}
    </div>
  );
};

export default BookShow;
