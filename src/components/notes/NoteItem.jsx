import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiTrash2, FiArchive } from 'react-icons/fi';
import { MdOutlineUnarchive } from 'react-icons/md';

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', options);

  return (
    <div className="note-item">
      <Link className="note-item__title" to={`/notes/${id}`}>{title}</Link>
      <p className="note-item__date">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        <button className="btn-action btn-delete" onClick={() => onDelete(id)}>
          <FiTrash2 /> Hapus
        </button>
        <button className="btn-action btn-archive" onClick={() => onArchive(id)}>
          {archived ? <><MdOutlineUnarchive /> Batalkan Arsip</> : <><FiArchive /> Arsipkan</>}
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default NoteItem;
