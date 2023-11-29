import axios from "axios";

export const boardList = () => axios.get("/boards");