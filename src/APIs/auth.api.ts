import AxiosClient from './api'
import END_POINT from './constants'
import axios from "axios";
import { setLocalStorage, STORAGE } from '@utils'
import BASE_API_URL from './config';


function login(Data: any) {
	return AxiosClient.post(END_POINT.LOGIN, Data)
         .then((res) => res.data)
         .then(async (data) => {
          try {
            if (data.message) {
             alert("Your username or password are incorrect");
            }
             else {
              setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
              setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
              window.location.reload();
            }
          } catch (e) {
            console.warn(e);
          }
        })
        .catch((err) => {
          console.warn(err);
        });
}

function register (Data) {
  axios({
    method: "post",
    url: `${BASE_API_URL}/api/auth/signup`,
    data: Data,
  })
    .then((res) => {
      return res.data;
    })
    .then(async (data) => {
      try {
        if (data.message) {
          alert("Phone number already exists!!!");
         }
          else {
            setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
            setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
         }
      } catch (e) {
        console.warn(e);
      }
    })
    .catch((err) => {
      console.warn(err);
    });
};


function getProfile(setInfor) {
	return AxiosClient.get(END_POINT.PROFILE_USER)
         .then((res) => {
          let listResponse = res.data.body;
          setInfor(listResponse);
         })
        .catch((err) => {
          console.warn(err);
        });
}

function updateProfile(Data) {
	return AxiosClient.post(END_POINT.UPDATE_PROFILE, Data)
         .then((res) => {
          window.location.reload();
          return res.data
         })
        .catch((err) => {
          console.warn(err);
        });
}


export {
  login,
  register,
  getProfile,
  updateProfile
}
