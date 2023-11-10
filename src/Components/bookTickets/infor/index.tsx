
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import { ApiBookingSeat,ApiBookingPartSeat } from "@apis";
import { formatCurrency } from "@utils";
const Wrapper = styled.div`
  .title{
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgb(236, 244, 253);
  }
  input{
    width: 70%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
  }
  .area{
    width: 70%;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
      outline: none !important;
    }
  }
  .left{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  .right{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    background-color: rgb(0, 96, 196);
    color : white;
  }
`

const Infor = ({list ,setList, dataBookSeat,setDataBookSeat , item, ArrSeat , count, idSeat, setDataInforBook}:any) => {

  const handleClickUp = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '3') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };
  const handleClickDown = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '1') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };

  const arr : any = [];
  Object.keys(item.routeStations).map(function(key){  
      arr.push({[key]:item.routeStations[key]})  
      return arr;  
  });   
  const routeStation : any =[]
  routeStation[0] =1;
  routeStation[1] = arr.length 

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
        errRequire: "Vui lòng điền thông tin!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
      handleClickUp()
      if(item.status === true){
        ApiBookingSeat({
          email: dataBookSeat.email,
          nameAgency : item.nameAgency,
          name: dataBookSeat.username,
          nameVehicle : item.nameVehicle,
          note : dataBookSeat.note,
          phoneNumber : dataBookSeat.phonenumber,
          seatIds : idSeat,
          tripId : item.idTrip,
          },setDataInforBook)
        }else {
          ApiBookingPartSeat({
            email: dataBookSeat.email,
            nameAgency : item.nameAgency,
            name: dataBookSeat.username,
            nameVehicle : item.nameVehicle,
            note : dataBookSeat.note,
            phoneNumber : dataBookSeat.phonenumber,
            price : item.price *count ,
            quantity : count,
            routeStationBook: routeStation ,
            tripId : item.idTrip,
            },setDataInforBook)
        }
    }
  };

  const handleValidUsername = (val :any) => {
     if (!val) {
      setInValidData({
        ...inValidData,
        errUsername: "Vui lòng điền tên!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errUsername: "",
      });
    }
  };
  const handleValidPhonenumber = (val :any) => {
    if (val.length > 11) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "Số điện thoại không quá 11 số!",
      });
    } else if (!val) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "Vui lòng điền số điện thoại!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPhonenumber: "",
      });
    }
  };

  const handleValidEmail = (val: any) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lòng điền email!",
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lòng điền email hợp lệ!",
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
      <div className="my-[1rem] ml-[-2rem] block ">
        <div className='title w-[70%]'>Chúng tôi chỉ dùng thông tin của bạn trong việc ghi nhận vé.</div>
        <div className='mt-4'>
           <p className='font-bold'>Họ tên <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="Nguyen Van A" 
                value={dataBookSeat.username}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    username: e.target.value,
                  })
                  handleValidUsername(e.target.value);
              }}/>
              {inValidData.errUsername ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errUsername}</p>
                ) : (
                  ""
              )}
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Số điện thoại <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="+84 865 ### ###" 
                value={dataBookSeat.phonenumber.replace(/\D/,'')}
                maxLength={11}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    phonenumber: e.target.value,
                  })
                  handleValidPhonenumber(e.target.value);
              }}/>
              {inValidData.errPhonenumber ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errPhonenumber}</p>
                ) : (
                  ""
              )}
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Email để nhận thông tin vé* <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="example@gmail.com" 
                value={dataBookSeat.email}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    email: e.target.value,
                  })
                  handleValidEmail(e.target.value);
              }}/>
              {inValidData.errEmail ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errEmail}</p>
                ) : (
                  ""
              )}
        </div>
        {inValidData.errRequire ? (
            <p className='text-red-600 mb-0 mb-[-15px] text-[10px] mt-2' > {inValidData.errRequire}</p>
          ) : (
            ""
          )}
        <div className='mt-4'>
           <p className='font-bold'>Ghi chú hoặc yêu cầu khác (Nếu có)</p>
           <textarea  className='area' placeholder="Các yêu cầu đặc biệt không thể được đảm bảo - nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn."
             value={dataBookSeat.note}
             onChange={(e : any) => {
              setDataBookSeat({
                ...dataBookSeat,
                note: e.target.value,
              })
          }}
           />
        </div>
        <p className='mt-2 mb-8'>Bằng việc nhấn nút Tiếp Tục, bạn đồng ý với 
          <br/> <span className='text-[#2a41e8]  '>Chính sách bảo mật thông tin và Quy chế </span></p>
          <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
          <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <button className='left' onClick={() => handleClickDown()}>Quay lại</button>
             </div>
             <div className='w-1/2 flex ml-[19.5rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : 
                    <span className='text-[#2a41e8]'>
                      {item.status ? 
                      <> <p>{formatCurrency(item.price*ArrSeat.length)}VND</p></> 
                      : 
                      <> <p>{formatCurrency(item.price *count)}VND</p></>
                      }
                    </span>
                </p>
                <button className='right' 
                  onClick={() => {
                    // handleClickUp()
                    onSubmitBooking()
                  }}>Tiếp tục</button>
             </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default Infor
