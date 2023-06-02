import { React } from 'react';

export const Note = () => {
  return (
    <div>
      <p className="user-card-facts-title">
        Note
      </p>
      <textarea
        className="user-card-note-textarea"
        placeholder="Click to add a note"
      ></textarea>

    </div>
  );
};
