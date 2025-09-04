import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BreedForm from "./components/BreedForm";
import BreedList from "./components/BreedList";
import EditModal from "./components/EditModal";
import { fetchBreeds } from "./services/dogApi";
import "./styles.css";

export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  useEffect(() => {
    const loadBreeds = async () => {
      const data = await fetchBreeds();
      setBreeds(data);
    };
    loadBreeds();
  }, []);

  const addFavorite = (dog) => {
    setFavorites([...favorites, dog]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  const updateFavorite = (updatedDog) => {
    setFavorites(
      favorites.map((f) => (f.id === updatedDog.id ? updatedDog : f))
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <BreedForm breeds={breeds} onAdd={addFavorite} />
        <h2>🐾 My Favorite Breeds</h2>
        <BreedList
          dogs={favorites}
          onRemove={removeFavorite}
          onEdit={setEditingDog}
        />
      </div>

      {editingDog && (
        <EditModal
          dog={editingDog}
          onSave={updateFavorite}
          onClose={() => setEditingDog(null)}
        />
      )}
    </div>
  );
}
