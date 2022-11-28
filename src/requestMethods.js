import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRjMjI3ZDAzOWU1OWJkYTBkNjNlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTYxNjIxMCwiZXhwIjoxNjY5ODc1NDEwfQ.kFgtf71gi3S1MRhn04xJ4wrkRMCzK4-1v6EYViaIIK0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
  });
