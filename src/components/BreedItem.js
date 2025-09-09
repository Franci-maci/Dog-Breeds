import React from "react";

export default function BreedItem({ dog, onRemove, onEdit }) {
  return (
    <div className="breed-card">
      {dog.image && <img src={dog.image} alt={dog.breed} />}
      <h3>{dog.breed}</h3>
      {dog.note && <p className="note">💬 {dog.note}</p>}
      <div className="card-buttons">
        <button onClick={() => onEdit(dog)}>Edit</button>
        <button className="danger" onClick={() => onRemove(dog.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
