import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getAllJokes = async (difficulty) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      difficulty: difficulty
    }
  });
  return response.data;
};


export const getJokeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const addJoke = async (joke) => {
  const response = await axios.post(BASE_URL, joke);
  return response.data;
};

export const updateJoke = async (id, joke) => {
  const response = await axios.put(`${BASE_URL}/${id}`, joke);
  return response.data;
};

export const deleteJoke = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export const getNextJoke = async (currentId) => {
  const allJokes = await getAllJokes();
  const currentJokeIndex = allJokes.findIndex(joke => joke._id === currentId);
  const nextJokeIndex = (currentJokeIndex + 1) % allJokes.length;
  const nextJoke = await getJokeById(allJokes[nextJokeIndex]._id);
  return nextJoke;
}
