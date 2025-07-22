import axios from "axios";

export const api = axios.create({
  baseURL: "https://basecampai-production.up.railway.app", // Replace with your actual FastAPI URL
});
