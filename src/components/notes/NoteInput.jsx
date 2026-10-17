import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle } from 'react-icons/fi';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if(title.trim() && body.trim()) {
      addNote({ title, body });
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="note-input">
      <h2 className="note-input__title">Buat Catatan Baru</h2>
      <form onSubmit={onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Ini adalah judul..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini..."
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
        <button type="submit">
          <FiCheckCircle /> Simpan
        </button>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
