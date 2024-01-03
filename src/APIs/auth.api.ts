import AxiosClient from './api'
import END_POINT from './constants'
import axios from "axios";
import { setLocalStorage, STORAGE } from '@utils'
import BASE_API_URL from './config';
import { USER_ROLE } from '@constants/auth';


function login(Data: any) {
	return AxiosClient.post(END_POINT.LOGIN, Data)
         .then((res) => res.data)
         .then(async (data) => {
          try {
            if (data.message) {
             alert("Your username or password are incorrect");
            }
             else {
              currentUser(data);
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
  return axios({
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

function currentUser(Data) {
  console.log(Data);
  return AxiosClient.get(END_POINT.CURRENT_PROFILE,'',{headers: {
    authorization: `${Data.accessToken}`,
    "content-type": "application/json",
  },})
  .then((res) => res.data)
  .then((data) => {
    console.log(data);
    if (
      (data.authorities[0].authority /*=== "ROLE_USER"*/)
    ) {
      setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      setLocalStorage(STORAGE.USER_TOKEN, Data.accessToken);
      window.location.reload();
    } else {
      alert("Vui lòng kiểm tra quyền truy cập");
    }
  })
    .catch((err) => {
      console.log(err);
    });
}


export {
  login,
  register,
  getProfile,
  updateProfile
}
