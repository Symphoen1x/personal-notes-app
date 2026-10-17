import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/notes/NoteList';
import SearchBar from '../components/notes/SearchBar';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const { data } = await getActiveNotes();
    setNotes(data || []);
    setLoading(false);
  };

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    fetchNotes();
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? (
        <p>Memuat catatan...</p>
      ) : (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
      )}
    </section>
  );
}

export default HomePage;
