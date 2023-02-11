import React from 'react';
import { useState } from 'react';
import '../styles/bookCreate.css';

const BookCreate = ({ onFormSubmit, onClick }) => {
  const [valueOfInput, setValueOfInput] = useState('');
  const [dateOne, setDateOne] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const [resenha, setResenha] = useState('');
  const handleChange = (e) => {
    setValueOfInput(e.target.value);
  };
  const handleClick = () => {
    onClick(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(valueOfInput, dateOne, dateTwo, resenha);
    setValueOfInput('');
    onClick(false);
  };
  const handleDateOneChange = (e) => {
    setDateOne(e.target.value);
  };
  const handleDateTwoChange = (e) => {
    setDateTwo(e.target.value);
  };
  return (
    <div className="bookcreate-container">
      <div className="bookcreate-item">
        <form onSubmit={handleSubmit}>
          <label>Livro Lido</label>
          <br />
          <input onChange={handleChange} value={valueOfInput} />
          <br />
          <label>Data Inicio: </label>
          <br />
          <input type="date" onChange={handleDateOneChange} value={dateOne} />
          <br />
          <label>Data Fim: </label>
          <br />
          <input
            type="date"
            onChange={handleDateTwoChange}
            value={dateTwo}
          />{' '}
          <br />
          <label>Resenha:</label>
          <br />
          <textarea
            value={resenha}
            onChange={(e) => setResenha(e.target.value)}
          ></textarea>
          <br />
          <button>ENVIAR LIVRO LIDO</button>
          <div className="modal-close" onClick={handleClick}>
            X
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;
