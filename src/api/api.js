import axios from "axios";

const API_URL = "http://localhost:8000"; // Replace with your backend API

export const fetchData = async (endpoint) => {
    // const response = await axios.get(`${API_URL}/${endpoint}`);
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data.data;
};

export const createData = async (endpoint, data) => {
  const response = await axios.post(`${API_URL}/${endpoint}`, data);
  return response.data;
};

export const updateData = async (endpoint, id, data) => {
  const response = await axios.put(`${API_URL}/${endpoint}/${id}`, data);
  return response.data;
};

export const deleteData = async (endpoint, id) => {
  await axios.delete(`${API_URL}/${endpoint}/${id}`);
};
