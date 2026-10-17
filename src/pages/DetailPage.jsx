import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/notes/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import NotFoundPage from './NotFoundPage';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };
    fetchNote();
  }, [id]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = async (id) => {
    if (note.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    navigate('/');
  };

  if (loading) {
    return <section><p>Memuat catatan...</p></section>;
  }

  if (note === null || note === undefined) {
    return <NotFoundPage />;
  }

  return (
    <section className="detail-page">
      <NoteDetail 
        {...note} 
        onDelete={onDeleteHandler} 
        onArchive={onArchiveHandler} 
      />
    </section>
  );
}

export default DetailPage;
