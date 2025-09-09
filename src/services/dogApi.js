import axios from "axios";

const BASE_URL = "https://dog.ceo/api";

export const fetchBreeds = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/breeds/list/all`);
    return Object.keys(res.data.message); // returns breed names
  } catch (err) {
    console.error("Error fetching breeds:", err);
    return [];
  }
};

export const fetchBreedImage = async (breed) => {
  try {
    const res = await axios.get(`${BASE_URL}/breed/${breed}/images/random`);
    return res.data.message;
  } catch (err) {
    console.error("Error fetching breed image:", err);
    return "";
  }
};
