import React from "react";
import BreedItem from "./BreedItem";

export default function BreedList({ dogs, onRemove }) {
  return (
    <div className="breed-list">
      {dogs.map((dog) => (
        <BreedItem key={dog.id} dog={dog} onRemove={onRemove} />
      ))}
    </div>
  );
}
