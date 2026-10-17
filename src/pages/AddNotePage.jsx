import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/notes/NoteInput';
import { addNote } from '../utils/network-data';

function AddNotePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onAddNoteHandler = async (note) => {
    setLoading(true);
    await addNote(note);
    setLoading(false);
    navigate('/');
  };

  return (
    <section className="add-new-page">
      <h2>Tambah Catatan Baru</h2>
      {loading ? <p>Menyimpan catatan...</p> : <NoteInput addNote={onAddNoteHandler} />}
    </section>
  );
}

export default AddNotePage;
