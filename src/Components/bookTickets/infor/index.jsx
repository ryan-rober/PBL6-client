import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ApiBookingSeat, ApiBookingPartSeat } from "@apis";
import { formatCurrency } from "@utils";

const Wrapper = styled.div`
  /* Your styles here */
`;

const Infor = ({ list, setList, dataBookSeat, setDataBookSeat, item, ArrSeat, count, idSeat, setDataInforBook }) => {

  const handleClickUp = () => {
    const newList = list.map((_item) => {
      if (_item.id === '3') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };

  const handleClickDown = () => {
    const newList = list.map((_item) => {
      if (_item.id === '1') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };

  const arr = [];
  Object.keys(item.routeStations).forEach(function (key) {
    arr.push({ [key]: item.routeStations[key] });
    return arr;
  });
  const routeStation = [];
  routeStation[0] = 1;
  routeStation[1] = arr.length;

  const [inValidData, setInValidData] = useState({
    errUsername: "",
    errPhonenumber: "",
    errEmail: "",
    errRequire: "",
  });

  useEffect(() => {
    dataBookSeat.phonenumber = dataBookSeat.phonenumber.replace(/\D/g, '');
    if (
      dataBookSeat.username &&
      dataBookSeat.phonenumber &&
      dataBookSeat.email
    ) {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
    }
  }, [
    dataBookSeat.username &&
    dataBookSeat.phonenumber &&
    dataBookSeat.email
  ]);

  const onSubmitBooking = () => {
    if (!dataBookSeat.username || !dataBookSeat.phonenumber || !dataBookSeat.email) {
      setInValidData({
        ...inValidData,
        errRequire: "Vui lòng điền thông tin!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
      handleClickUp();
      if (item.status === true) {
        ApiBookingSeat({
          email: dataBookSeat.email,
          nameAgency: item.nameAgency,
          name: dataBookSeat.username,
          nameVehicle: item.nameVehicle,
          note: dataBookSeat.note,
          phoneNumber: dataBookSeat.phonenumber,
          seatIds: idSeat,
          tripId: item.idTrip,
        }, setDataInforBook);
      } else {
        ApiBookingPartSeat({
          email: dataBookSeat.email,
          nameAgency: item.nameAgency,
          name: dataBookSeat.username,
          nameVehicle: item.nameVehicle,
          note: dataBookSeat.note,
          phoneNumber: dataBookSeat.phonenumber,
          price: item.price * count,
          quantity: count,
          routeStationBook: routeStation,
          tripId: item.idTrip,
        }, setDataInforBook);
      }
    }
  };

  const handleValidUsername = (val) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errUsername: "Vui lòng điền tên!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errUsername: "",
      });
    }
  };

  const handleValidPhonenumber = (val) => {
    if (val.length > 11) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "Số điện thoại không quá 11 số!",
      });
    } else if (!val) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "Vui lòng điền số điện thoại!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPhonenumber: "",
      });
    }
  };

  const handleValidEmail = (val) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lòng điền email!",
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lòng điền email hợp lệ!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errEmail: "",
      });
    }
  };

  return (
    <Wrapper>
      {/* Your JSX content here */}
    </Wrapper>
  );
};

export default Infor;
