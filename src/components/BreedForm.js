import React, { useState } from "react";
import { fetchBreedImage } from "../services/dogApi";

export default function BreedForm({ breeds, onAdd }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selected) return;

    const image = await fetchBreedImage(selected);
    const newDog = {
      id: Date.now(),
      breed: selected,
      image,
    };

    onAdd(newDog);
    setSelected("");
  };

  return (
    <form className="breed-form" onSubmit={handleSubmit}>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select a breed...</option>
        {breeds.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      <button type="submit">Add to Favorites</button>
    </form>
  );
}
