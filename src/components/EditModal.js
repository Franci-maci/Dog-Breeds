import React, { useState } from "react";

export default function EditModal({ dog, onSave, onClose }) {
  const [note, setNote] = useState(dog.note || "");

  const handleSave = () => {
    onSave({ ...dog, note });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Note for {dog.breed}</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Why do you love this breed?"
        />
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button className="secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
