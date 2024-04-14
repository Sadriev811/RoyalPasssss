import axios from "axios";

let base_url = import.meta.env.VITE_BASE_URL;
let data_base_users = import.meta.env.VITE_DATA_BASE_URL

export const getData = async (path) => {
  try {
    const res = await axios.get(base_url + path);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const postData = async (path, body) => {
  try {
    const res = await axios.post(base_url + path, body);

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getDataEmail = async (path) => {
  try {
    const res = await axios.get(data_base_users + path);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const postDataEmail = async (path, body) => {
  try {
    const res = await axios.post(data_base_users + path, body);

    return res;
  } catch (e) {
    console.log(e);
  }
};