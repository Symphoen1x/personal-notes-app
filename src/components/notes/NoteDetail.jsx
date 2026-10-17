import React from 'react';
import { showFormattedDate } from '../../utils';

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  return (
    <div className="note-detail">
      <h3 className="note-detail__title">{title}</h3>
      <p className="note-detail__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="note-detail__body">{body}</div>
      <div className="note-detail__action">
        <button className="action" onClick={() => onArchive(id)} title={archived ? "Unarchive" : "Archive"}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
        <button className="action" onClick={() => onDelete(id)} title="Delete">
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteDetail;
