/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { Background, ICON_Locate, ICON_Calendar, ICON_Search, Quytrinh } from '@assets';
import { Wrapper } from './styled';
import DatePicker from 'react-datepicker';
import { RoutePopular, OutstandingOffer, ConnectionPlatform } from '@components';
import { Link } from 'react-router-dom';
import { getListLocation } from '@apis';
import Select from 'react-select';
import { setLocalStorage, STORAGE } from '@utils';

const HomeScreen = () => {
  const [listLocation, setListLocation] = useState([]);
  const [startpoint, setStartPoint] = useState();
  const [endpoint, setEndPoint] = useState();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [date, setDate] = useState(tomorrow);

  useEffect(() => {
    getListLocation(setListLocation);
    setLocalStorage(STORAGE.startpoint, JSON.stringify(startpoint));
    setLocalStorage(STORAGE.endpoint, JSON.stringify(endpoint));
    setLocalStorage(STORAGE.date, JSON.stringify(date));
  }, [startpoint, endpoint, date]);

  const updatedCountries = listLocation.map((country) => ({
    label: country.nameStation,
    value: country.id,
  }));

  return (
    <>
      <Wrapper id="intro" className="bg-white">
        <img src={Background} className="image" alt="" />
        <div className="w-3/5 bg-white container rounded-lg block">
          <div className="flex">
            <div className="w-1/5 h-20 rounded-lg m-6 item flex">
              <div className="my-auto mx-2">
                <img src={ICON_Locate} alt="" />
              </div>
              <div className="my-auto w-32">
                <p className="text-sky-600 mb-1 ml-[-8px]">Điểm đi</p>
                <Select
                  id="country"
                  name="country"
                  label="country"
                  className="w-full pr-2 bb"
                  placeholder="Chọn điểm đi"
                  options={updatedCountries}
                  onChange={(value) => {
                    setStartPoint(value);
                  }}
                />
              </div>
            </div>
            <div className="w-1/5 h-20 rounded-lg m-6 item flex">
              <div className="my-auto mx-2">
                <img src={ICON_Locate} alt="" />
              </div>
              <div className="my-auto w-32">
                <p className="text-sky-600 mb-1 ml-[-8px]">Điểm đến</p>
                <Select
                  id="country"
                  name="country"
                  label="country"
                  className="w-full pr-2"
                  placeholder="Chọn điểm đến"
                  options={updatedCountries}
                  onChange={(value) => {
                    setEndPoint(value);
                  }}
                />
              </div>
            </div>
            <div className="w-1/5 h-20 rounded-lg m-6 item flex">
              <div className="my-auto mx-4">
                <img src={ICON_Calendar} alt="" />
              </div>
              <div className="my-auto w-32">
                <p className="text-sky-600 mb-1">Ngày khởi hành</p>
                <DatePicker
                  id="date"
                  dateFormat="yyyy-MM-dd"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  minDate={tomorrow}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-1/5 h-20 rounded-lg m-6 item flex bg_red">
              <div className="my-auto ml-8 mr-1">
                <img src={ICON_Search} alt="" />
              </div>
              <div className="my-auto w-32 cursor-pointer ">
                <Link to="./booking">
                  <p className="text-white mb-1 ">Tìm chuyến</p>
                </Link>
              </div>
            </div>
          </div>
          <h1 className="text-lg text-center">DỄ DÀNG ĐẶT XE TRÊN WEBSITE</h1>
          <img src={Quytrinh} className="pb-6 m-auto ml-20" alt="" />
        </div>
        <RoutePopular />
        <OutstandingOffer />
        <ConnectionPlatform />
      </Wrapper>
    </>
  );
};

export default HomeScreen;
