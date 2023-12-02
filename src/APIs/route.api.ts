
import axios from "axios";
import AxiosClient from './api'
import END_POINT from './constants'
import { setLocalStorage } from '@utils'
//@ts-ignore
import { Linking } from "react-native";
import BASE_API_URL  from "./config";

const getListLocation = (setListLocation) => {
  axios({
    method: "GET",
    url: `${BASE_API_URL}/api/station`
  })
    .then((res) => {
      const listResponse = res.data;
      // console.warn(res)
      const listAll:any[] = [];
      listResponse.forEach((item :any, index :any) => {
        listAll.push({
          id : item.id,
          nameStation: item.nameStation,
        });
      });
      setListLocation(listAll);
    })
    .catch((err) => console.warn(err));
};

const findTrips = (Data, setData) => {
  axios({
    method: "POST",
    url: `${BASE_API_URL}/api/trip/find-trip`,
    data: Data,
  })
    .then((res) => {
      let listResponse = res.data;
      setData(listResponse);
    })
    .catch((err) => console.warn(err));
};


function ApiBookingSeat(Data: any, setData) {
	return AxiosClient.post(END_POINT.BOOKSEAT, Data)
         .then((res) => {
          let listResponse = res.data;
          setData(listResponse);
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiBookingPartSeat(Data: any, setData) {
	return AxiosClient.post(END_POINT.BOOKPARTSEAT, Data)
         .then((res) => {
          let listResponse = res.data;
          setData(listResponse);
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiPayment(Data: any) {
	return AxiosClient.post(END_POINT.PAYMENT, Data)
         .then((res) => {
          Linking.openURL(res.data.url);
          setLocalStorage('count',true)
          window.location.replace('./profile')
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiHistoryBooking(setListHistory) {
	return AxiosClient.get(END_POINT.HISTORY)
         .then((res) => {
          setListHistory(res.data.body)
          return res.data.body;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiRefund(id: any) {
	return AxiosClient.post(`${END_POINT.REFUND}/${id}`, id)
         .then((res) => {
          window.location.reload();
           return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiRatingTrip(Data) {
	return AxiosClient.post(`${END_POINT.RATINGTRIP}`, Data)
         .then((res) => {
          window.location.reload();
          alert("Cảm ơn bạn đã đánh giá");
          return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function getListRatingByAgency(nameAgency: any, setListRating) {
	return AxiosClient.get(`${END_POINT.GETRATINGBYAGENCY}/${nameAgency}`)
         .then((res) => {
          setListRating(res.data.body)
          return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function getListRatingByUser(setListRating) {
	return AxiosClient.get(`${END_POINT.GETRATINGBYUSER}`)
         .then((res) => {
          setListRating(res.data.body)
          return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function getListNotification(setListNotification) {
	return AxiosClient.get(`${END_POINT.GETNOTIFI}`)
         .then((res) => {
          setListNotification(res.data.body)
          return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

function getListNoPayment(setListNoPayment) {
	return AxiosClient.get(`${END_POINT.GETNOPAYMENT}`)
         .then((res) => {
          setListNoPayment(res.data)
          return res.data;
         })
        .catch((err) => {
          console.warn(err);
        });
}

export { 
  getListLocation ,
  findTrips, 
  ApiBookingSeat ,
  ApiBookingPartSeat ,
  ApiPayment ,
  ApiHistoryBooking , 
  ApiRefund, 
  ApiRatingTrip,
  getListRatingByAgency,
  getListRatingByUser,
  getListNotification,
  getListNoPayment
};
