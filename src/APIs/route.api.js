import axios from 'axios';
import AxiosClient from './api';
import END_POINT from './constants';
import { setLocalStorage } from '../Utils';
//@js-ignore
// import { Linking } from 'react-native';

const HOST = import.meta.env.HOST
const PORT = import.meta.env.PORT

const getListLocation = (setListLocation) => {
  axios({
    method: 'GET',
    url: `http://${HOST}:${PORT}/api/station`,
  })
    .then((res) => {
      const listResponse = res.data;
      const listAll = [];
      listResponse.forEach((item) => {
        listAll.push({
          id: item.id,
          nameStation: item.nameStation,
        });
      });
      setListLocation(listAll);
    })
    .catch((err) => console.warn(err));
};

const findTrips = (Data, setData) => {
  axios({
    method: 'POST',
    url: `http://${HOST}:${PORT}/api/trip/find-trip`,
    data: Data,
  })
    .then((res) => {
      let listResponse = res.data;
      setData(listResponse);
    })
    .catch((err) => console.warn(err));
};

const ApiBookingSeat = (Data, setData) => {
  return AxiosClient.post(END_POINT.BOOKSEAT, Data)
    .then((res) => {
      let listResponse = res.data;
      setData(listResponse);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const ApiBookingPartSeat = (Data, setData) => {
  return AxiosClient.post(END_POINT.BOOKPARTSEAT, Data)
    .then((res) => {
      let listResponse = res.data;
      setData(listResponse);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const ApiPayment = (Data) => {
  return AxiosClient.post(END_POINT.PAYMENT, Data)
    .then((res) => {
      // Linking.openURL(res.data.url);
      setLocalStorage('count', true);
      window.location.replace('./profile');
    })
    .catch((err) => {
      console.warn(err);
    });
};

const ApiHistoryBooking = (setListHistory) => {
  return AxiosClient.get(END_POINT.HISTORY)
    .then((res) => {
      setListHistory(res.data.body);
      return res.data.body;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const ApiRefund = (id) => {
  return AxiosClient.post(`${END_POINT.REFUND}/${id}`, id)
    .then((res) => {
      window.location.reload();
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const ApiRatingTrip = (Data) => {
  return AxiosClient.post(`${END_POINT.RATINGTRIP}`, Data)
    .then((res) => {
      window.location.reload();
      alert('Cảm ơn bạn đã đánh giá');
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getListRatingByAgency = (nameAgency, setListRating) => {
  return AxiosClient.get(`${END_POINT.GETRATINGBYAGENCY}/${nameAgency}`)
    .then((res) => {
      setListRating(res.data.body);
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getListRatingByUser = (setListRating) => {
  return AxiosClient.get(`${END_POINT.GETRATINGBYUSER}`)
    .then((res) => {
      setListRating(res.data.body);
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getListNotification = (setListNotification) => {
  return AxiosClient.get(`${END_POINT.GETNOTIFI}`)
    .then((res) => {
      setListNotification(res.data.body);
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getListNoPayment = (setListNoPayment) => {
  return AxiosClient.get(`${END_POINT.GETNOPAYMENT}`)
    .then((res) => {
      setListNoPayment(res.data);
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
    });
};

export {
  getListLocation,
  findTrips,
  ApiBookingSeat,
  ApiBookingPartSeat,
  ApiPayment,
  ApiHistoryBooking,
  ApiRefund,
  ApiRatingTrip,
  getListRatingByAgency,
  getListRatingByUser,
  getListNotification,
  getListNoPayment,
};
