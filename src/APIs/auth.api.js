import AxiosClient from './api';
import END_POINT from './constants';
import axios from 'axios';
import { setLocalStorage, STORAGE } from '../Utils';

const login = async (Data) => {
  try {
    const res = await AxiosClient.post(END_POINT.LOGIN, Data);
    const data = res.data;

    if (data.message) {
      alert("Your username or password is incorrect");
    } else {
      setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
      window.location.reload();
    }
  } catch (error) {
    console.warn(error);
  }
};

const register = async (Data) => {
  try {
    const res = await axios.post("http://35.240.208.147:6789/api/auth/signup", Data);
    const data = res.data;

    if (data.message) {
      alert("Phone number already exists!!!");
    } else {
      setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
    }
  } catch (error) {
    console.warn(error);
  }
};

const getProfile = async (setInfor) => {
  try {
    const res = await AxiosClient.get(END_POINT.PROFILE_USER);
    const listResponse = res.data.body;
    setInfor(listResponse);
  } catch (error) {
    console.warn(error);
  }
};

const updateProfile = async (Data) => {
  try {
    const res = await AxiosClient.post(END_POINT.UPDATE_PROFILE, Data);
    window.location.reload();
    return res.data;
  } catch (error) {
    console.warn(error);
  }
};

export {
  login,
  register,
  getProfile,
  updateProfile
};
